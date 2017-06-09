/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Toggle from './src/components/Toggle'
import Row from './src/components/Row'

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
          <View marginTop={20} type="toggle">
            <StatusBar
              backgroundColor="blue"
              barStyle="dark-content"
            />
            <Row 
              wrapper={ Toggle } 
              values={ gender.values }
            />
          </View>
        );
        break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('trauma_restore', () => trauma_restore);
