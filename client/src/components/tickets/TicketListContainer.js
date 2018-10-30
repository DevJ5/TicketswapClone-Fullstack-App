import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTickets } from '../../actions/tickets';
import TicketList from './TicketList';

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.getAllTickets(this.props.eventId);
  }

  render() {
    console.log('something?', this.props);
    if (!this.props.ticketsPerEvent) return null;
    return (
      <div>
        <TicketList ticketsPerEvent={this.props.ticketsPerEvent} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticketsPerEvent: state.ticketsPerEvent
});

export default connect(
  mapStateToProps,
  { getAllTickets }
)(TicketListContainer);
