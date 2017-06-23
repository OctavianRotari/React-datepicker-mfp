/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import StatusBar from '../StatusBar';
import StandbyContainer from '../../containers/StandbyContainer';
import TopBarContainer from '../../containers/TopBarContainer';
import styles from './styles';

class TraumaApp extends Component {
  componentDidMount() {
    this.props.onLoaded();
  }

  render() {
    const { inProgress, forms } = this.props.appData
    const { components } = this.props.viewState;
    if(!forms || !components || inProgress){
      return(
        <View style={{flex:1}}>
          <ActivityIndicator
            style={
              {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'dimgrey',
                flex: 1
              }
            }
            color="#048fc0" 
            size="large"
          />
        </View>
      )
    }
    return (
      <View style={{flex:1, flexDirection:'column', backgroundColor: 'dimgrey'}}>
        <TopBarContainer/>
        <View style={{flex:12, flexDirection: 'row'}}>
          <View style={{flex:2, borderRightWidth: 0.5}}>
            <Text>Menu goes here</Text>
          </View>
          <View style={{flex:14}}>
            <StandbyContainer name='standby'/>
          </View>
          <View style={
            {
              borderLeftWidth: 1,
              flex:4, 
            }
          }>
          <Text>Alerts go here</Text>
        </View>
      </View>
    </View>
    )
  }
}

export default TraumaApp;

