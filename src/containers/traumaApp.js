/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider, connect } from 'react-redux';
import StatusBar from '../components/StatusBar';
import Standby from '../components/Standby';
import { fetchDataPoints } from '../actions/index'

class TraumaApp extends Component {
  componentDidMount() {
    this.props.fetchDataPoints();
  }

  render() {
    const dataPoints= this.props.dataPoints.undefined
    if(!dataPoints) {
      return(
        <View>
          <StatusBar />
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View>
        <StatusBar />
        <Standby datapoints={ dataPoints }/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { dataPoints: state.dataPoints }
}

export default connect(mapStateToProps, { fetchDataPoints })(TraumaApp)

