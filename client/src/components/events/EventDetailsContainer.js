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
    if (!this.props.singleEvent) return null;
    return (
      <div>
        <EventDetails singleEvent={this.props.singleEvent} />
        <TicketListContainer
          singleEvent={this.props.singleEvent}
          eventId={this.props.match.params.id}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleEvent: state.singleEvent
});

export default connect(
  mapStateToProps,
  { getSingleEvent }
)(EventDetailsContainer);
