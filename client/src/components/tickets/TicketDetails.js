import React from 'react';

export default function TicketDetails(props) {
  return (
    <div className="ticket-details card blue-grey darken-1  white-text">
      <h2>Ticket:</h2>
      <p>Price: {props.ticketDetails.price}</p>
      <p>Description: {props.ticketDetails.description}</p>
      <p>
        <b>Fraud risk is {props.risk} %</b>
      </p>
    </div>
  );
}
