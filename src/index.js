/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux';
// import configureStore from '../configureStore'
// import TraumaApp from './app'
// const store = configureStore();

export default class Root extends Component {
  render() {
    console.log(getState());
    return(
      <View>
        <Text>fuck</Text>
      </View>
    )
  }
}
