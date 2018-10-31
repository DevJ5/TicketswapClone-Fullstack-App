import React, { Component } from 'react';
import EventsList from './EventsList';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllEvents } from '../../actions/events';
import EventForm from './EventForm';

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.getAllEvents();
    console.log('component mounted', this.props);
  }
  render() {
    console.log('Eventslistcontainer', this.props);
    if (!this.props.authenticated) return <Redirect to="/logins" />;
    if (!this.props.events) return null;
    return (
      <div className="container row">
        <EventsList events={this.props.events} />
        <EventForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  events: state.events
});

export default connect(
  mapStateToProps,
  { getAllEvents }
)(EventsListContainer);
