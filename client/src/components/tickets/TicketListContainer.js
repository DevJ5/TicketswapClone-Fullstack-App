import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from './TicketList';

class TicketListContainer extends Component {
  render() {
    return (
      <div>
        <TicketList eventDetails={this.props.eventDetails} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TicketListContainer);
