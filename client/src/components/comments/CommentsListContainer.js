import React, { Component } from 'react';
import CommentsList from './CommentsList';

export default class CommentsListContainer extends Component {
  render() {
    return (
      <div>
        <CommentsList ticketDetails={this.props.ticketDetails} />
      </div>
    );
  }
}
