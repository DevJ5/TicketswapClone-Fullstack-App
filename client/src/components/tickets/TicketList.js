import React from 'react';
import { Link } from 'react-router-dom';

export default function TicketList(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.ticketsPerEvent.tickets.map(ticket => (
          <li key={ticket.id}>
            <Link
              to={`/events/${props.ticketsPerEvent.id}/tickets/${ticket.id}`}>
              <span>{ticket.description}</span>
              <span>{ticket.price}</span>
              <span>{ticket.pictureUrl}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
