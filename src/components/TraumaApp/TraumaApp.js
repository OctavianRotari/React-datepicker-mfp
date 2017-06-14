/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import StatusBar from '../StatusBar';
import VistaContainer from '../../containers/VistaContainer'
import styles from './styles';

class TraumaApp extends Component {
  render() {
    return (
      <View>
        <StatusBar />
        <VistaContainer name='standby'/>
      </View>
    )
  }
}

export default TraumaApp;
