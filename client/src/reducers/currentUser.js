import { localStorageJwtKey } from '../constants';
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/users';

// Check localstorage for token
let initState = null;
try {
  const jwt = localStorage.getItem(localStorageJwtKey);
  if (jwt) {
    initState = { jwt };
  }
} catch (e) {
  console.log(`Error retrieving data from local storage`, e);
}

export default (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log('Reducer userloginsucces', action.payload);
      return { jwt: action.payload };

    case USER_LOGOUT:
      return null;

    default:
      return state;
  }
};
