/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
import TraumaApp from './TraumaApp';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <TraumaApp />
      </Provider>
    );
  }
}

export default Root;
