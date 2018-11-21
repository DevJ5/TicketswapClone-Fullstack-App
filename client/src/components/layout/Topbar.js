import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function Topbar(props) {
	if (props.authenticated)
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
	if (!props.authenticated)
		return (
			<div>
				<button
					className=" logOutButton waves-effect waves-light btn grey darken-4 right"
					onClick={() => props.history.push('/signup')}>
					Sign Up
				</button>
				<button
					className="logOutButton waves-effect waves-light btn grey darken-4 right"
					onClick={() => {
						props.history.push('/logins');
					}}>
					Login
				</button>
			</div>
		);
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Topbar));
