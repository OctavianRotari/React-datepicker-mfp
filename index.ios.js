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
import StatusBar from './src/components/StatusBar';
import Toggle from './src/components/Toggle'
import Row from './src/components/Row'

const firebaseConfig = {
  apiKey: 'AIzaSyDDtJK6WtEwBwDab03aVorshQLTovJEltc',
  authDomain: 'trauma-d2e6f.firebaseapp.com',
  databaseUrl: 'https://trauma-d2e6f.firebaseio.com/',
  storageBucket: 'gs://trauma-d2e6f.appspot.com/'
}

export default class trauma_restore extends Component {
  render() {
    const gender = {
      "name":"gender",
      "control":"toggle",
      "label":"Gender",
      "values":{
        "Male":{
          "selected": false
        },
        "Female":{
          "selected": true
        }
      }
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

AppRegistry.registerComponent('trauma_restore', () => trauma_restore);
