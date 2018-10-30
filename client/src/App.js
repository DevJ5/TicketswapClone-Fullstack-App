import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import EventsListContainer from './components/events/EventsListContainer';
import LogoutPage from './components/logout/LogoutPage';
import Topbar from './components/layout/Topbar';
import EventDetailsContainer from './components/events/EventDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Topbar />
        </nav>
        <main>
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/logins" component={LoginPage} />
          <Route exact path="/events" component={EventsListContainer} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/events/:id" component={EventDetailsContainer} />
          <Route exact path="/" render={() => <Redirect to="/events" />} />
        </main>
      </div>
    );
  }
}

export default App;
