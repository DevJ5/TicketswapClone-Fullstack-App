import React, { Component } from 'react';

export default class Signup extends Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              onChange={this.handleInputChange}
              value={this.state.firstName || ''}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              onChange={this.handleInputChange}
              value={this.state.lastName || ''}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email || ''}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password || ''}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
