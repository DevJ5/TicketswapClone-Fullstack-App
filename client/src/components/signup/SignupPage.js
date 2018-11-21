import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignupForm';
import { connect } from 'react-redux';
import { postSignUp } from '../../actions/users';

class SignupPage extends Component {
	handleSubmit = data => {
		this.props.postSignUp(data);
	};

	render() {
		if (this.props.signup.success) return <Redirect to="/logins" />;
		return (
			<div className="container">
				<SignUpForm onSubmit={this.handleSubmit} />
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
	{ postSignUp }
)(SignupPage);
