import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import TicketForm from './TicketForm';

class TicketListContainer extends Component {
  render() {
    return (
      <div className="container row">
        <TicketList singleEvent={this.props.singleEvent} />
        {this.props.authenticated && <TicketForm eventId={this.props.eventId} />}
        {!this.props.authenticated && <p className="col s2 m4">Log in to sell your tickets.</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null
});

export default connect(mapStateToProps)(TicketListContainer);
