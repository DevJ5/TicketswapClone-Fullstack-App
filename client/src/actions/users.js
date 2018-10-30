import * as request from 'superagent';
import { baseUrl } from '../constants';
export const ADD_USER = 'ADD_USER';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
});

const userSignupFailed = () => ({
  type: USER_SIGNUP_FAILED
});

export const signup = ({
  firstName,
  lastName,
  email,
  password
}) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ firstName, lastName, email, password })
    .then(_ => dispatch(userSignupSuccess()))
    .catch(err => {
      if (err.status === 400) {
        dispatch(userSignupFailed(err.response.body.message));
      } else console.error(err);
    });
};
