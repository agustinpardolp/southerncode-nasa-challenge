import { types } from "../../actions/roverActions/types";
import { REQUEST_STATUS } from "../../../constants";
import { saveToLocalStorage } from "../../../utils";

export const favourites = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { data } = {} } = action;
  switch (action.type) {
    case types.SET_FAVOURITES:
      saveToLocalStorage("queryData", data);
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADED,
        error: null,
      };
    case types.REMOVE_FAVOURITES:
      return {
        data: {},
        status: REQUEST_STATUS.LOADED,
      };

    default:
      return state;
  }
};

export default favourites;
