import React, { Component } from 'react';
import { postTicket } from '../../actions/tickets';
import { connect } from 'react-redux';

class TicketForm extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTicket(this.state, this.props.eventId);
    this.setState({
      price: '',
      description: '',
      pictureUrl: ''
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="col s12 m4">
        <form onSubmit={this.handleSubmit}>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={this.state.price || ''}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description || ''}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Picture URL:
            <input
              type="text"
              name="pictureUrl"
              value={this.state.pictureUrl || ''}
              onChange={this.handleChange}
            />
          </label>
          <button className="btn waves-effect waves-light" type="submit">
            Add Ticket
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postTicket }
)(TicketForm);
