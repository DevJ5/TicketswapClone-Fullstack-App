import React from 'react';

export default function EventDetails(props) {
  return (
    <div className="container">
      <h1 className="">Tickets for {props.singleEvent.name}</h1>
      <div className="row">
        <div className="col s12 m6">
          <p>Description: {props.singleEvent.description}</p>
          <p>From: {props.singleEvent.startDate}</p>
          <p>Till: {props.singleEvent.endDate}</p>
        </div>
        <div className="col s12 m6">
          <img
            className="right"
            src={props.singleEvent.pictureUrl}
            alt="event"
            width="300"
          />
        </div>
      </div>

      <hr />
    </div>
  );
}
