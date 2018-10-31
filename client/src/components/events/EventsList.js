import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {
  console.log(props);
  if (!props.events) return null;
  return (
    <div>
      <h1>Events:</h1>
      <ul>
        {props.events.map(event => (
          <Link to={`/events/${event.id}`} key={event.id}>
            <li>
              <span>{event.name}</span>
              <br />
              <span>{event.description}</span>
              <br />
              <span>{event.startDate}</span>
              <br />
              <span>{event.endDate}</span>
              <br />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
