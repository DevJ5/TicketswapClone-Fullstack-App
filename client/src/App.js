import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import EventsListContainer from './components/EventsListContainer';
import Login from './components/Login';
import Signup from './components/signup/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/events" component={EventsListContainer} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
