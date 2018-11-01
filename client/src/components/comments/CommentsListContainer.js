import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';

class CommentsListContainer extends Component {
  render() {
    return (
      <div className="row">
        <CommentsList ticketDetails={this.props.ticketDetails} />
         {this.props.authenticated && <CommentForm eventId={this.props.eventId} ticketId={this.props.ticketId}/>}
         {!this.props.authenticated && <p className="col s2 m4">Log in to post comments.</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null
});

export default connect(mapStateToProps)(CommentsListContainer);
