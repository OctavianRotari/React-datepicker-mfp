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
import PromptsContainer from '../../containers/PromptsContainer';
import colors from '../../config/colors';
import { cmss, tass } from '../../styles/styles';

class TraumaApp extends Component {
  render() {
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
          <View style={[ tass.alerts ]}>
            <PromptsContainer />
          </View>
        </View>
      </View>
    )
  }
}

export default TraumaApp;

