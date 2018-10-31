import React from 'react';
import { Link } from 'react-router-dom';

export default function TicketList(props) {
  console.log('TicketList: ', props);
  return (
    <div>
      <h1>All tickets:</h1>
      <ul>
        {props.eventDetails.tickets.map(ticket => (
          <li key={ticket.id}>
            <Link to={`/events/${props.eventDetails.id}/tickets/${ticket.id}`}>
              <span>{ticket.user.firstName} - </span>
              <span>{ticket.user.lastName} - </span>
              <span>{ticket.description} - </span>
              <span>{ticket.price} - </span>
              <img src={ticket.pictureUrl} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
