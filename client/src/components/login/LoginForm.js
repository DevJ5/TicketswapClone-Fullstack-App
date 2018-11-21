import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Loginform extends Component {
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
			<div className="container">
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

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(Loginform));
