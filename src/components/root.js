/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from "../store/store";
import StatusBar from './StatusBar';
import TraumaAppContainer from '../containers/TraumaAppContainer';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <StatusBar />
          <TraumaAppContainer />
        </View>
      </Provider>
    );
  }
}

export default Root;
