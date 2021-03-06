import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {
  if (!props.allEvents) return null;
  return (
    <div className="col s12 m8">
      <h2>Events:</h2>
      <ul className="collection">
        {props.allEvents.map(event => (
          <Link to={`/events/${event.id}`} key={event.id}>
            <li className="collection-item avatar hoverable">
              <img src={event.pictureUrl} alt="" className="circle" />
              <span className="title">{event.name}</span>
              <br />
              <span>{event.description}</span>
              <br />
              <span>{event.startDate}</span>
              <br />
              <span>{event.endDate}</span>
              <br />
              <div className="divider" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
