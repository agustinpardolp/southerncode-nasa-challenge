import { combineReducers } from "redux";
import { notification } from "./notification/notifications-reducer";
import { rovers } from "./rovers/rovers-reducer";
import { favourites } from "./favourites/favourite-reducer";

const allReducers = combineReducers({
  notification,
  rovers,
  favourites,

});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
