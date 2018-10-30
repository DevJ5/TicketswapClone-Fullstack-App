import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/users';

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    console.log('top of render logoutpage', this.props);
    if (this.props.currentUser) return null;
    console.log('render op logoutpage', this.props);
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
