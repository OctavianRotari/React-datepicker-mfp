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
import colors from '../../config/colors';
import { cmss, tass } from '../../styles/styles';

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
            style={ tass.actInd }
            color={ colors.secCol }
            size="large"
          />
        </View>
      )
    }
    return (
      <View style={[cmss.flexOneCol, cmss.bgClr]}>
        <TopBarContainer/>
        <View style={ tass.view }>
          <View style={ tass.navSidebar }>
            <NavSidebarContainer />
          </View>
          <View style={ tass.vista }>
            <VistaContainer/>
          </View>
          <View style={ tass.alerts }>
            <Text>Alerts go here</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default TraumaApp;

