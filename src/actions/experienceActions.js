import * as types from '../constants/actionTypes';
//import api from '../api/experienceApi';
import api from '../api/mock/experienceApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuccess(data) {
  return { type: types.EXPERIENCE.LOAD, data };
}

export function load() {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.load().then(data => {

      dispatch(loadSuccess(data));

    }).catch(error => {

      throw(error);
    });
  };
}
