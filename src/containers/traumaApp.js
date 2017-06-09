/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as firebase from 'firebase';
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
import Toggle from '../components/Toggle'
import Row from '../components/Row'
import { fetchDataPoints } from '../actions/index'

const firebaseConfig = {
  apiKey: 'AIzaSyDDtJK6WtEwBwDab03aVorshQLTovJEltc',
  authDomain: 'trauma-d2e6f.firebaseapp.com',
  databaseUrl: 'https://trauma-d2e6f.firebaseio.com/',
  storageBucket: 'gs://trauma-d2e6f.appspot.com/'
}

class TraumaApp extends Component {
  componentDidMount() {
    this.props.fetchDataPoints();
  }

  render() {
    const { gender } = this.props.dataPoints;
    console.log(gender)
    if(!gender) {
      return(
        <View>
          <StatusBar />
          <ActivityIndicator />
        </View>
      )
    }
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

const mapStateToProps = (state) => {
  return { dataPoints: state.dataPoints }
}

export default connect(mapStateToProps, { fetchDataPoints })(TraumaApp)


