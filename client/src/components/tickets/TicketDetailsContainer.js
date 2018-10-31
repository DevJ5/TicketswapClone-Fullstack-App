import React, { Component } from 'react';
import TicketDetails from './TicketDetails';
import { connect } from 'react-redux';
import { getSingleTicket } from '../../actions/tickets';
import CommentsListContainer from '../comments/CommentsListContainer';

class TicketDetailsContainer extends Component {
  componentDidMount() {
    const { eventId, ticketId } = this.props.match.params;
    this.props.getSingleTicket(eventId, ticketId);
  }
  render() {
    console.log('TicketDetailsContainer', this.props);
    if (!this.props.ticketDetails) return null;
    return (
      <div>
        <TicketDetails ticketDetails={this.props.ticketDetails} />
        <CommentsListContainer ticketDetails={this.props.ticketDetails} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticketDetails: state.ticketDetails
});

export default connect(
  mapStateToProps,
  { getSingleTicket }
)(TicketDetailsContainer);
