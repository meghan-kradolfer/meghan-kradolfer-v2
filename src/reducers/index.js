import { combineReducers } from 'redux';

import Selected from './global/select';

const rootReducer = combineReducers({
  selected: Selected
});

export default rootReducer;
