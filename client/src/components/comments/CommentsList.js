import React from 'react';

export default function CommentsList(props) {
  return (
    <div className="col s12 m8">
      <h3>Comments:</h3>
      <ul className="collection">
        {props.ticketDetails.comments.map(comment => (
          <li className="collection-item" key={comment.id}>
            <h5>{comment.title}</h5>
            <br />
            <span>
              Content:
              {comment.content}
            </span>
            <br />
            <span>
              <i>
                Author: {comment.user.firstName + ' ' + comment.user.lastName}
              </i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
