import { types } from "./types";

export const showNotification = (message, msgType) => {
  return {
    type: types.SHOW_NOTIFICATION,
    payload: { message, msgType },
  };
};

export const resetNotification = () => ({
  type: types.RESET_NOTIFICATION,
});
