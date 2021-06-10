import {
  GET_STAFF,
  SET_LOADING,
  STAFF_ERROR
} from './types';

//get users from server
export const getStaff = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('https://moretask-fatec.herokuapp.com/user/', {
      method: 'GET'
  });
    const data = await res.json();

    dispatch({
      type: GET_STAFF,
      payload: data.Users
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      // payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};