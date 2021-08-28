import { types } from "./types";
import { roverServices } from "../../../services/roverServices";

export const fetchRoversByModelRequest = () => {
  return {
    type: types.FETCH_ROVERS_BY_MODEL_REQUEST,
  };
};

const fetchRoversByModelSuccess = (data) => {
  return {
    type: types.FETCH_ROVERS_BY_MODEL_SUCCESS,
    payload: data,
  };
};

const fetchRoversByModelFailure = (data) => {
  return {
    type: types.FETCH_ROVERS_BY_MODEL_FAILURE,
    payload: data,
  };
};

export const fetchRoversByModel = (dispatch) => (roverName, query) => {
  dispatch(fetchRoversByModelRequest());
  return roverServices
    .fetchRoversByModel(roverName, query)
    .then((data) => {
      return dispatch(fetchRoversByModelSuccess(data));
    })
    .catch((error) => dispatch(fetchRoversByModelFailure(error)));
};
