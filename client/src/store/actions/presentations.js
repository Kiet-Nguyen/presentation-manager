import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchPresentationsStart = () => {
  return {
    type: actionTypes.FETCH_PRESENTATION_START,
  };
};

export const fetchPresentationsSuccess = presentations => {
  return {
    type: actionTypes.FETCH_PRESENTATION_SUCCESS,
    presentations,
  };
};

export const fetchPresentationsFail = error => {
  return {
    type: actionTypes.FETCH_PRESENTATION_FAIL,
    error,
  };
};

export const fetchPresentations = () => {
  return async dispatch => {
    dispatch(fetchPresentationsStart());

    try {
      const response = await axios.get('/presentations');
      console.log('response', response.data);

      dispatch(fetchPresentationsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPresentationsFail(error));
    }
  };
};
