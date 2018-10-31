import React from 'react';

export default function EventDetails(props) {
  return (
    <div>
      <h1 className="center">Tickets for {props.eventDetails.name}</h1>
      <hr />
    </div>
  );
}
