import * as request from 'superagent';
import { baseUrl } from '../constants';

export const SET_TICKET = 'SET_TICKET';
export const SET_RISK = 'SET_RISK';

const setTicket = ticket => ({
  type: SET_TICKET,
  payload: ticket
});

const setRisk = risk => ({
  type: SET_RISK,
  payload: risk
});

export const getSingleTicket = (eventId, ticketId) => dispatch => {
  request
    .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
    .then(res => dispatch(setTicket(res.body)))
    .catch(err => console.error(err));
};

export const getRisk = (eventId, ticketId) => dispatch => {
  request
    .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}/risk`)
    .then(res => dispatch(setRisk(res.body)))
    .catch(err => console.error(err));
};
