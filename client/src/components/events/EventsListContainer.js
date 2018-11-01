import React, { Component } from 'react';
import EventsList from './EventsList';
import { connect } from 'react-redux';
import { getAllEvents } from '../../actions/events';
import EventForm from './EventForm';

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    if (!this.props.allEvents) return null;
    return (
      <div className="container row">
        <EventsList allEvents={this.props.allEvents} />
        {this.props.authenticated && <EventForm />}
        {!this.props.authenticated && <p className="col s2 m4">Log in to create an event</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  allEvents: state.allEvents
});

export default connect(
  mapStateToProps,
  { getAllEvents }
)(EventsListContainer);
