import React from 'react';

export default function EventDetails(props) {
  return (
    <div>
      <h1>Event name: {props.eventDetails.name}</h1>
      <hr />
    </div>
  );
}
