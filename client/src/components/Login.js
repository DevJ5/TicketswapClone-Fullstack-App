import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <form>
          <label>
            Email:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
        </form>
      </div>
    );
  }
}
