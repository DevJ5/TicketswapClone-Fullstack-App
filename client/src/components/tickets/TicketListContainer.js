import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTickets } from '../../actions/tickets';
import TicketList from './TicketList';

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.getAllTickets();
  }

  render() {
    if (!this.props.tickets) return null;
    return (
      <div>
        <TicketList tickets={this.props.tickets} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(
  mapStateToProps,
  { getAllTickets }
)(TicketListContainer);
