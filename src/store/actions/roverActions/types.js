import { createActionTypes } from "../../../utils";

export const types = {
  ...createActionTypes("ROVERS", "FETCH_ROVERS"),
  ...createActionTypes("ROVERS", "FETCH_ROVERS_BY_MODEL"),
};
