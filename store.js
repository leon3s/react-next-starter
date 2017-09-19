import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from '_reducers';

const store = initialState => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(
      promise(),
      thunk,
      createLogger({
        duration: true,
        diff: true,
      }),
    ),
  ),
);


export default store;
