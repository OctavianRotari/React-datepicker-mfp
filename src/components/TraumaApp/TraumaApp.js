/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import StatusBar from '../StatusBar';
import StandbyContainer from '../../containers/StandbyContainer'
import styles from './styles';

class TraumaApp extends Component {
  componentDidMount() {
    this.props.onLoaded();
  }

  render() {
    const { inProgress, forms } = this.props.appData
    if(!forms || inProgress){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View>
        <StatusBar />
        <StandbyContainer name='standby'/>
      </View>
    )
  }
}

export default TraumaApp;
