import React, { Component } from 'react';
import Loginform from './LoginForm';
import { postLogin } from '../../actions/users';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Loginpage extends Component {
  handleSubmit = credentials => {
    this.props.postLogin(credentials);
  };

  render() {
    if (this.props.authenticated) return <Redirect to="/events" />;
    return (
      <div>
        <Loginform onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup,
  authenticated: state.currentUser !== null
});

export default connect(
  mapStateToProps,
  { postLogin }
)(Loginpage);
