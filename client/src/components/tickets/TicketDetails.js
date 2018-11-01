import React from 'react';

export default function TicketDetails(props) {
  return (
    <div className="ticket-details card  teal lighten-5 black-text">
      <h2>Ticket:</h2>
      <div className="row">
        <div className="col s12 m6">
          <p>Price: {props.ticketDetails.price}</p>
          <p>Description: {props.ticketDetails.description}</p>
          <p><b>Fraud risk is {props.risk} %</b></p>
        </div>
        <div className="col s12 m6">
          <img
            className="right"
            src={props.ticketDetails.pictureUrl}
            alt="ticket"
            width="300"
          />
        </div>
      </div>
    </div>
  )
}
