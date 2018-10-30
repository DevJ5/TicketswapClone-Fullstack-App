import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import EventsListContainer from './components/EventsListContainer';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/logins" component={LoginPage} />
        <Route exact path="/events" component={EventsListContainer} />
        <Route exact path="/signup" component={SignupPage} />
      </div>
    );
  }
}

export default App;
