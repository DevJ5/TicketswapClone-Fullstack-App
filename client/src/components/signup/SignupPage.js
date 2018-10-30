import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { signup } from '../../actions/users';

class SignupPage extends Component {
  handleSubmit = data => {
    const { firstName, lastName, email, password } = data;
    this.props.postSignup(firstName, lastName, email, password);
  };

  render() {
    console.log(this.props);
    if (this.props.signup.success) return <Redirect to="/" />;
    return (
      <div>
        <SignupForm onSubmit={this.handleSubmit} />
        <p>{this.props.signup.error && 'Invalid credentials'}</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  signup: state.signup
});

export default connect(
  mapStateToProps,
  { postSignup: signup }
)(SignupPage);
