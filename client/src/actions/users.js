import * as request from 'superagent';
import { baseUrl } from '../constants';
export const ADD_USER = 'ADD_USER';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
});

const userSignupFailed = error => ({
  type: USER_SIGNUP_FAILED,
  payload: error
});

const userLoginSuccess = jwt => ({
  type: USER_LOGIN_SUCCESS,
  payload: jwt
});

const userLoginFailed = error => ({
  type: USER_LOGIN_FAILED,
  payload: error
});

export const logout = () => ({
  type: USER_LOGOUT
});

export const postSignUp = signUpData => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(signUpData)
    .then(_ => dispatch(userSignupSuccess()))
    .catch(err => {
      console.log(err.response);
      if (err.status === 400) {
        dispatch(userSignupFailed(err.response.body.message));
      } else console.error(err);
    });
};

export const postLogin = credentials => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send(credentials)
    .then(res => dispatch(userLoginSuccess(res.body.jwt)))
    .catch(err => {
      if (err.status === 400) {
        dispatch(userLoginFailed(err.response.body.message));
      } else console.error(err);
    });
};
