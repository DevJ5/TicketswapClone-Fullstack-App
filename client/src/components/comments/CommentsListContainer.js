import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

export default class CommentsListContainer extends Component {
  render() {
    return (
      <div className="row">
        <CommentsList ticketDetails={this.props.ticketDetails} />
        <CommentForm
          eventId={this.props.eventId}
          ticketId={this.props.ticketId}
        />
      </div>
    );
  }
}
