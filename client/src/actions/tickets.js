import * as request from 'superagent';
import { baseUrl } from '../constants';

export const SET_TICKETS = 'SET_TICKETS';

const setTickets = tickets => ({
  type: SET_TICKETS,
  payload: tickets
});

export const getAllTickets = eventId => dispatch => {
  request
    .get(`${baseUrl}/events/${eventId}/tickets`) // WE NEED EVENTID AS AN ARGUMENT
    .then(res => dispatch(setTickets(res.body)))
    .catch(err => console.error(err));
};
