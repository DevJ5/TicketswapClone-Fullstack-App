import React from 'react';

export default function CommentsList(props) {
  return (
    <div>
      <h2>Comments:</h2>
      <ul>
        {props.ticketDetails.comments.map(comment => (
          <li key={comment.id}>
            <span>{comment.title}</span>
            <span>{comment.content}</span>
            <span>{comment.user.firstName + ' ' + comment.user.lastName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
