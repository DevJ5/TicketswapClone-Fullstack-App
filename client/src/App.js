import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import EventsListContainer from './components/events/EventsListContainer';
import LogoutPage from './components/logout/LogoutPage';
import Topbar from './components/layout/Topbar';
import EventDetailsContainer from './components/events/EventDetailsContainer';
import TicketDetailsContainer from './components/tickets/TicketDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-wrapper red darken-3">
          <Topbar />
        </nav>
        <main>
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/logins" component={LoginPage} />
          <Route exact path="/events" component={EventsListContainer} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/events/:id" component={EventDetailsContainer} />
          <Route
            exact
            path="/events/:eventId/tickets/:ticketId"
            component={TicketDetailsContainer}
          />

          <Route exact path="/" render={() => <Redirect to="/events" />} />
        </main>
      </div>
    );
  }
}

export default App;
