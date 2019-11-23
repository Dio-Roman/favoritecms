import { combineReducers } from 'redux';

import favoriteReducer from './favoriteReducer';

const HighlightReducer = combineReducers({
  favoriteReducer
});

export default HighlightReducer;
