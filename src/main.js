import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import reducers from './reducers';

import Layout from './components/Layout';

const createStoreWithMiddleware = applyMiddleware(
  promise,
  logger()
)(createStore);

export default class Weather extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Layout />
      </Provider>
    )
  }
}
