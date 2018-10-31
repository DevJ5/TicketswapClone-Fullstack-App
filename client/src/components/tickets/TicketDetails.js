import React from 'react';

export default function TicketDetails(props) {
  return (
    <div>
      <h1>Ticket:</h1>
      <h3>{props.ticketDetails.price}</h3>
      <h3>{props.ticketDetails.description}</h3>
      <h3>
        Fraud risk:
        {props.risk} %
      </h3>
    </div>
  );
}
