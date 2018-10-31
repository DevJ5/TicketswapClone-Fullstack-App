import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function Topbar(props) {
  return (
    <div>
      <button
        className="logOutButton waves-effect waves-light btn grey darken-4 right"
        onClick={() => {
          props.history.push('/logout');
        }}>
        Logout
      </button>
    </div>
  );
}

export default withRouter(connect()(Topbar));
