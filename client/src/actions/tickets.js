import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const SET_TICKET = 'SET_TICKET';
export const SET_RISK = 'SET_RISK';
export const ADD_TICKET = 'ADD_TICKET';

const setTicket = ticket => ({
  type: SET_TICKET,
  payload: ticket
});

const setRisk = risk => ({
  type: SET_RISK,
  payload: risk
});

const addTicket = ticket => ({
  type: ADD_TICKET,
  payload: ticket
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

export const postTicket = (ticket, eventId) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/events/${eventId}/tickets`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(ticket)
    .then(res => dispatch(addTicket(res.body)))
    .catch(err => console.error(err));
};
