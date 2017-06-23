/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import StatusBar from '../StatusBar';
import VistaContainer from '../../containers/VistaContainer';
import TopBarContainer from '../../containers/TopBarContainer';
import NavSidebarContainer from '../../containers/NavSidebarContainer';
import styles from './styles';

class TraumaApp extends Component {
  componentDidMount() {
    this.props.onLoaded();
  }

  render() {
    const { inProgress, forms } = this.props.appData
    const { components } = this.props.viewState;
    const { active } = this.props.activeForm;
    if(!forms || !components || !active || inProgress){
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
            <NavSidebarContainer />
          </View>
          <View style={{flex:14}}>
            <VistaContainer name='standby'/>
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

