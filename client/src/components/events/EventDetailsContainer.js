import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleEvent } from '../../actions/events';
import EventDetails from './EventDetails';
import TicketListContainer from '../tickets/TicketListContainer';

class EventDetailsContainer extends Component {
  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.props.getSingleEvent(eventId);
  }
  render() {
    const eventId = this.props.match.params.id;
    if (!this.props.eventDetails) return null;
    return (
      <div>
        <EventDetails eventDetails={this.props.eventDetails} />
        <TicketListContainer eventId={eventId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eventDetails: state.eventDetails
});

export default connect(
  mapStateToProps,
  { getSingleEvent }
)(EventDetailsContainer);
