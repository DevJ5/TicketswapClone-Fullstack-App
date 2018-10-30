import React from 'react';
import { Link } from 'react-router-dom';

export default function TicketList(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.tickets[0].map(ticket => (
          <li key={ticket.id}>
            <Link to={`/events/:eventId/${ticket.id}`}>
              {ticket.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
