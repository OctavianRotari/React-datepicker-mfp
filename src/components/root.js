/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { Provider } from "react-redux";
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { cmss, root } from '../styles/styles';
import store from "../store/store";
import StatusBar from './StatusBar';
import TraumaApp from '../components/TraumaApp';
import FingerprintPopup from './FingerprintPopup';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      popupShowed: false,
      authenticated: false
    };
  }

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true});
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupShowed: false });
  };

  handleAuthentication = (authenticated) => {
    this.setState({ authenticated });
  }

  componentDidMount() {
    FingerprintScanner
      .isSensorAvailable()
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  render() {
    const { errorMessage, popupShowed } = this.state;
    if(!this.state.authenticated) {
      return (
        <View style={root.container}>
          <Text style={root.heading}>
           Athenticate with fingerprint.
          </Text>
          <TouchableOpacity
            style={root.fingerprint}
            onPress={this.handleFingerprintShowed}
            disabled={!!errorMessage}
          >
            <Image source={require('../assets/finger_print.png')} />
          </TouchableOpacity>
          {errorMessage && (
            <Text style={root.errorMessage}>
              {errorMessage}
            </Text>
          )}
          {popupShowed && (
            <FingerprintPopup
              style={root.popup}
              handlePopupDismissed={this.handleFingerprintDismissed}
              handleAuthentication={this.handleAuthentication}
            />
          )}
          <Text style={root.text}>or</Text>
          <Text style={root.heading}>Authenticate with sequence</Text>
        </View>
      );
    }
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <StatusBar style={{flex:1}}/>
          <TraumaApp style={{flex:13}}/>
        </View>
      </Provider>
    );
  }
}

export default Root;


