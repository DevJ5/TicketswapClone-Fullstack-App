import React, { Component } from 'react';
import { postComment } from '../../actions/comments';
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
    this.props.postComment(this.props.eventId, this.props.ticketId, this.state);
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    return (
      <div className="col s12 m4">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title || ''}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Content:
            <textarea
              rows="10"
              cols="50"
              name="content"
              value={this.state.content || ''}
              onChange={this.handleChange}
            />
          </label>

          <button className="btn waves-effect waves-light" type="submit">
            Add Comment
          </button>
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
  { postComment }
)(EventForm);
