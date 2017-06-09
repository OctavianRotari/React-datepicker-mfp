/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import StatusBar from './src/components/StatusBar';
import Toggle from './src/components/Toggle'
import Row from './src/components/Row'
import { fetchDataPoints } from './src/actions/'

const firebaseConfig = {
  apiKey: 'AIzaSyDDtJK6WtEwBwDab03aVorshQLTovJEltc',
  authDomain: 'trauma-d2e6f.firebaseapp.com',
  databaseUrl: 'https://trauma-d2e6f.firebaseio.com/',
  storageBucket: 'gs://trauma-d2e6f.appspot.com/'
}

class TraumaApp extends Component {
  componentDidMount() {
    this.props.fetchDataPoints
  }

  render() {
    switch (gender.control) {
      case 'toggle':
        return (
          <View>
            <StatusBar />
            <Row 
              type="toggle"
              wrapper={ Toggle } 
              values={ gender.values }
            />
          </View>
        );
        break;
    }
  }
}

function mapStateToProps(state) {
  return { dataPoints: state.dataPoints }
}

export default connect(mapStateToProps, {fetchDataPoints})(TraumaApp)

AppRegistry.registerComponent('TraumaApp', () => TraumaApp);
