import React, { Component } from 'react';
import EventsList from './EventsList';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class EventsListContainer extends Component {
  render() {
    if (!this.props.authenticated) return <Redirect to="/logins" />;

    return (
      <div>
        <EventsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser
});

export default connect(mapStateToProps)(EventsListContainer);
