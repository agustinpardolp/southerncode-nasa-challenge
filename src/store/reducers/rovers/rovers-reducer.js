import { types } from "../../actions/roverActions/types";
import { REQUEST_STATUS } from "../../../constants";

export const rovers = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { error, data } = {} } = action;
  switch (action.type) {
    case types.FETCH_ROVERS_BY_MODEL_REQUEST:
      return {
        ...state,
        status: REQUEST_STATUS.LOADING,
        error: null,
      };
    case types.FETCH_ROVERS_BY_MODEL_SUCCESS:
      return {
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_ROVERS_BY_MODEL_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.FAILED,
        error,
      };

    default:
      return state;
  }
};

export default rovers;
