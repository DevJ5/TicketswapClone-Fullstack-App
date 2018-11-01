import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/users';

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) return null;
    return <Redirect to="/" />;
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { logout }
)(LogoutPage);
