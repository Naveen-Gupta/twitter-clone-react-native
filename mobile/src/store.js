import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';

import reducers from './reducers';

const networkInterface = createNetworkInterface({
  uri: 'http://192.168.0.102:8081/graphql',
});

export const client = new ApolloClient({
  networkInterface,
});

const middlewares = [client.middleware(), thunk];

export const store = createStore(
  reducers(client),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares),
);
