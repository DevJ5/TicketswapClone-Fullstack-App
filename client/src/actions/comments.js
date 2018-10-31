import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const ADD_COMMENT = 'ADD_COMMENT';

const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

export const postComment = (eventId, ticketId, comment) => (
  dispatch,
  getState
) => {
  console.log(eventId, ticketId, comment);
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(comment)
    .then(res => dispatch(addComment(res.body)))
    .catch(err => console.error(err));
};
