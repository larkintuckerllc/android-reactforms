import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({ realtime: true });
const middlewares = [];
export default () => createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);
