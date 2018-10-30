import * as request from 'superagent';
import { baseUrl } from '../constants';

export const SET_TICKETS = 'SET_TICKETS';

const setTickets = tickets => ({
  type: SET_TICKETS,
  payload: tickets
});

export const getAllTickets = () => dispatch => {
  request
    .get(`${baseUrl}/events/:eventId/tickets`)
    .then(res => dispatch(setTickets(res.body)))
    .catch(err => console.error(err));
};
