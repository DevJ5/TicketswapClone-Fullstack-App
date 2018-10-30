import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {
  console.log(props);
  if (!props.events) return null;
  return (
    <div>
      <ul>
        {props.events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
