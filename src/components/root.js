/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TouchableHighlight, AlertIOS } from 'react-native';
import { Provider } from "react-redux";
import TouchID from 'react-native-touch-id';
import { cmss } from '../styles/styles';
import store from "../store/store";
import StatusBar from './StatusBar';
import TraumaAppContainer from '../containers/TraumaAppContainer';

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: false }
  }
  _pressHandler() {
    TouchID.authenticate('Authenticate to proceed.')
      .then(success => {
        this.setState({authenticated: true});
      })
      .catch(error => {
        this.setState({authenticated: false});
      });
  }

  render() {
    if(!this.state.authenticated) {
      return (
        <TouchableHighlight
          style={[{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }, cmss.bgClr ]}
          onPress={this._pressHandler()}>
          <View
            style={[{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }, cmss.bgClr ]}
          >
            <StatusBar style={{flex:1}}/>
            <Text style={{flex:1, textAlign:'center'}}>Authenticate with Touch ID</Text>
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <StatusBar style={{flex:1}}/>
          <TraumaAppContainer style={{flex:13}}/>
        </View>
      </Provider>
    );
  }
}

export default Root;
