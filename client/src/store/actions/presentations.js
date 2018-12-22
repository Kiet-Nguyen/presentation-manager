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
      dispatch(fetchPresentationsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPresentationsFail(error));
    }
  };
};

export const postPresentationStart = () => {
  return {
    type: actionTypes.POST_PRESENTATION_START,
  };
};

export const postPresentationSuccess = presentationData => {
  return {
    type: actionTypes.POST_PRESENTATION_SUCCESS,
    presentationData,
  };
};

export const postPresentationFail = error => {
  return {
    type: actionTypes.POST_PRESENTATION_FAIL,
    error,
  };
};

export const postPresentation = presentationData => {
  return async dispatch => {
    dispatch(postPresentationStart());

    try {
      await axios.post('/presentations/add', presentationData);
      dispatch(postPresentationSuccess(presentationData));
    } catch (error) {
      console.log('error from POST', error);
      dispatch(postPresentationFail(error));
    }
  };
};
