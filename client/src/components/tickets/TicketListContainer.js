import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import TicketForm from './TicketForm';

class TicketListContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container row">
        <TicketList eventDetails={this.props.eventDetails} />
        <TicketForm eventId={this.props.eventId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TicketListContainer);
