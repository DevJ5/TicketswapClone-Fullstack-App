import * as request from 'superagent';
import { baseUrl } from '../constants';

export const SET_TICKET = 'SET_TICKET';

const setTicket = ticket => ({
  type: SET_TICKET,
  payload: ticket
});

export const getSingleTicket = (eventId, ticketId) => dispatch => {
  request
    .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
    .then(res => dispatch(setTicket(res.body)))
    .catch(err => console.error(err));
};
