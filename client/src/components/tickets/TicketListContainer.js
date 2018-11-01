import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import TicketForm from './TicketForm';
import { getAllTickets, addRisk } from '../../actions/tickets';

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.addRisk(this.props);
  }

  render() {
    if (!this.props.allTickets) return null;
    return (
      <div className="container row">
        <TicketList
          singleEvent={this.props.singleEvent}
          allTickets={this.props.allTickets}
        />
        {this.props.authenticated && (
          <TicketForm eventId={this.props.eventId} />
        )}
        {!this.props.authenticated && (
          <p className="col s2 m4">Log in to sell your tickets.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  allTickets: state.allTickets
});

export default connect(
  mapStateToProps,
  { getAllTickets, addRisk }
)(TicketListContainer);
