import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTickets } from '../../actions/tickets';

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.getAllTickets();
  }
  render() {
    return (
      <div>
        <ul>
          <li>Ticketje</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getAllTickets }
)(TicketListContainer);
