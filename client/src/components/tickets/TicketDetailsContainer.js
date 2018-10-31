import React, { Component } from 'react';
import TicketDetails from './TicketDetails';
import { connect } from 'react-redux';
import { getSingleTicket, getRisk } from '../../actions/tickets';
import CommentsListContainer from '../comments/CommentsListContainer';

class TicketDetailsContainer extends Component {
  componentDidMount() {
    const { eventId, ticketId } = this.props.match.params;
    this.props.getSingleTicket(eventId, ticketId);

    // get fraud risk
    this.props.getRisk(eventId, ticketId);
  }
  render() {
    const { eventId, ticketId } = this.props.match.params;
    console.log('TicketDetailsContainer', this.props);
    if (!this.props.ticketDetails) return null;
    return (
      <div className="container">
        <TicketDetails
          ticketDetails={this.props.ticketDetails}
          risk={this.props.risk}
        />
        <div className="divider" />
        <CommentsListContainer
          eventId={eventId}
          ticketId={ticketId}
          ticketDetails={this.props.ticketDetails}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticketDetails: state.ticketDetails,
  risk: state.risk
});

export default connect(
  mapStateToProps,
  { getSingleTicket, getRisk }
)(TicketDetailsContainer);
