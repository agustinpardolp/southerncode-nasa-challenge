import { types } from "./types";

export const setFavourites = (favouriteQuery) => {
  return {
    type: types.SET_FAVOURITES,
    payload: { favouriteQuery },
  };
};

export const resetFavourites = () => ({
  type: types.RESET_FAVOURITES,
});
