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
import css from '../../config/commonStyles';
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
            style={ styles.actInd }
            color={ colors.secCol }
            size="large"
          />
        </View>
      )
    }
    return (
      <View style={[css.flexOneCol, css.bgClr]}>
        <TopBarContainer/>
        <View style={ styles.view }>
          <View style={ styles.navSidebar }>
            <NavSidebarContainer />
          </View>
          <View style={ styles.vista }>
            <VistaContainer/>
          </View>
          <View style={ styles.alerts }>
            <Text>Alerts go here</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default TraumaApp;

