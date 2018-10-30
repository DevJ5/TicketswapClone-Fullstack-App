import React, { Component } from 'react';

export default class Loginform extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email || ''}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password || ''}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
