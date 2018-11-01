import React from 'react';
import { Link } from 'react-router-dom';

export default function TicketList(props) {
  return (
    <div className="col s12 m8">
      <ul>
        {props.singleEvent.tickets.map(ticket => (
          <Link
            key={ticket.id}
            to={`/events/${props.singleEvent.id}/tickets/${ticket.id}`}>
            <li className="card-panel hoverable">
              <span>Name: {ticket.user.firstName} {ticket.user.lastName}</span>
              <br />
              <span>Description: {ticket.description} </span>
              <br />
              <img src={ticket.pictureUrl} alt="" width="100" height="auto" />
              <br />
              <span>Price: {ticket.price}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
