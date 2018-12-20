import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  presentations: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRESENTATION_START:
      return updateObject(state, { loading: true });

    case actionTypes.FETCH_PRESENTATION_SUCCESS:
      return updateObject(state, {
        presentations: action.presentations,
        loading: false,
        error: null,
      });

    case actionTypes.FETCH_PRESENTATION_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
