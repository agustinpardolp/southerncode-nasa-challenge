import { types } from './types';
import { roverServices } from '../../../services/roverServices';

export const fetchRoversByModelRequest = () => ({
  type: types.FETCH_ROVERS_BY_MODEL_REQUEST,
});

const fetchRoversByModelSuccess = (data) => ({
  type: types.FETCH_ROVERS_BY_MODEL_SUCCESS,
  payload: data,
});

const fetchRoversByModelFailure = (data) => ({
  type: types.FETCH_ROVERS_BY_MODEL_FAILURE,
  payload: data,
});

export const fetchRoversByModel = (dispatch) => (roverName, query, page) => {
  dispatch(fetchRoversByModelRequest());
  return roverServices
    .fetchRoversByModel(roverName, query, page)
    .then((data) => dispatch(fetchRoversByModelSuccess(data)))
    .catch((error) => dispatch(fetchRoversByModelFailure(error)));
};
