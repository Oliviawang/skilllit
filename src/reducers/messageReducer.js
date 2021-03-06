// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const messageReducer = (state = initialState.messages, action) => {

  switch (action.type) {

    case actionTypes.MESSAGE.LOAD:
      return action.data

    default:
      return state;
  }
}

export default messageReducer;
