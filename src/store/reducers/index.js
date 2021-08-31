/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { rovers } from './rovers/rovers-reducer';

const allReducers = combineReducers({
  rovers,
});

const reducers = (state, action) => allReducers(state, action);

export default reducers;
