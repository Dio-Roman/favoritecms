import { createStore, compose } from 'redux';

import HighlightReducer from '../model/reducers';

// for redux dev tools
// eslint-disable no-underscore-dangle
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
//  eslint-enable

  export default () => {
    const store = createStore(
      HighlightReducer,
      compose(
        composeEnhancers()
      )
    );

  return store;
}

