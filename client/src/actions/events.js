import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from './users';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENT = 'SET_EVENT';
export const ADD_EVENT = 'ADD_EVENT';

const setEvents = events => ({
  type: SET_EVENTS,
  payload: events
});

const setEvent = event => ({
  type: SET_EVENT,
  payload: event
});

const addEvent = event => ({
  type: ADD_EVENT,
  payload: event
});

export const getAllEvents = () => dispatch => {
  request
    .get(`${baseUrl}/events`)
    .then(res => dispatch(setEvents(res.body)))
    .catch(err => console.error(err));
};

export const getSingleEvent = id => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(res => dispatch(setEvent(res.body)))
    .catch(err => console.error(err));
};

export const postEvent = event => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(event)
    .then(res => dispatch(addEvent(res.body)))
    .catch(err => console.error(err));
};
