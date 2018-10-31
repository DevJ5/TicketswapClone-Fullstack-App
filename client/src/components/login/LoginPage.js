import React, { Component } from 'react';
import Loginform from './LoginForm';
import { login } from '../../actions/users';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Loginpage extends Component {
  handleSubmit = data => {
    const { email, password } = data;
    this.props.loginPost(email, password);
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/events" />;
    return (
      <div>
        {!this.props.signup.success && (
          <button
            className="right signUpButton"
            onClick={() => {
              this.props.history.push('/signup');
            }}>
            Signup
          </button>
        )}
        <Loginform onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { loginPost: login }
)(Loginpage);
