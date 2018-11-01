import React, { Component } from 'react';
import { postEvent } from '../../actions/events';
import { connect } from 'react-redux';

class EventForm extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postEvent(this.state);
    this.setState({
      name: '',
      description: '',
      pictureUrl: '',
      startDate: '',
      endDate: ''
    });
  };

  render() {
    return (
      <div className="col s12 m4 addEventForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name || ''}
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
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={this.state.startDate || ''}
              onChange={this.handleChange}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={this.state.endDate || ''}
              onChange={this.handleChange}
            />
          </label>
          <button className="btn waves-effect waves-light" type="submit">
            Add Event
          </button>
          <p>Only administrators can create events.</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eventDetails: state.eventDetails
});

export default connect(
  mapStateToProps,
  { postEvent }
)(EventForm);
