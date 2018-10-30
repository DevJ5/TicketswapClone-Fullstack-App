import * as request from 'superagent';
import { baseUrl } from '../constants';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENT = 'SET_EVENT';

const setEvents = events => ({
  type: SET_EVENTS,
  payload: events
});

const setEvent = event => ({
  type: SET_EVENT,
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
