import { successMessages, failureMessages } from "./messages";
import { showNotification } from "../actions/notificationActions/index";

//middleware to intercept the request status (succesfull or failed) and trigger a toast notificacion
const toastMiddleware = (state) => (next) => (action) => {
  const { type } = action;
  if (type.match("SUCCESS")) {
    if (successMessages[type]) {
      state.dispatch(showNotification(successMessages[type], "success"));
    }
  } else if (type.match("FAILURE")) {
    if (failureMessages[type]) {
      state.dispatch(showNotification(failureMessages[type], "failure"));
    } else if (failureMessages[type]) {
      state.dispatch(
        showNotification(failureMessages[type].default, "failure")
      );
    }
  }

  return next(action);
};

export default toastMiddleware;
