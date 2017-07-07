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
import NumericPassword from './NumericPassword';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFingerMessage: undefined,
      errorNumberMessage: undefined,
      popupFingerShowed: false,
      popupNumericShowed: false,
      authenticated: false
    };
  }

  handleFingerprintShowed = () => {
    this.setState({ popupFingerShowed: true});
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupFingerShowed: false });
  };

  handleNumericShowed = () => {
    this.setState({ popupNumericShowed: true});
  };

  handleNumericDismissed = () => {
    this.setState({ popupNumericShowed: false });
  };

  handleAuthentication = (authenticated) => {
    this.setState({ authenticated });
  }

  componentDidMount() {
    FingerprintScanner
      .isSensorAvailable()
      .catch(error => this.setState({ errorFingerMessage: error.message }));
  }

  render() {
    const { errorNumberMessage, errorFingerMessage, popupFingerShowed, popupNumericShowed } = this.state;
    if(!this.state.authenticated) {
      return (
        <View style={root.container}>
          <Text style={root.heading}>
           Athenticate with fingerprint.
          </Text>
          <TouchableOpacity
            style={root.fingerprint}
            onPress={this.handleFingerprintShowed}
            disabled={!!errorFingerMessage}
          >
            <Image source={require('../assets/finger_print.png')} />
          </TouchableOpacity>
          {errorFingerMessage && (
            <Text style={root.errorMessage}>
              {errorFingerMessage}
            </Text>
          )}
          {popupFingerShowed && (
            <FingerprintPopup
              style={root.popup}
              handlePopupDismissed={this.handleFingerprintDismissed}
              handleAuthentication={this.handleAuthentication}
            />
          )}
          <Text style={root.text}>or</Text>
          <Text style={root.heading}>Authenticate with sequence</Text>
          <TouchableOpacity
            style={root.fingerprint}
            onPress={this.handleNumericShowed}
            disabled={!!errorNumberMessage}
          >
            <Image style={{maxHeight: 70, maxWidth: 70, padding: 30}} source={require('../assets/entering-password.png')} />
          </TouchableOpacity>
          {errorNumberMessage && (
            <Text style={root.errorMessage}>
              {errorNumberMessage}
            </Text>
          )}
          {popupNumericShowed && (
            <NumericPassword
              style={root.numericPopup}
              handlePopupDismissed={this.handleNumericDismissed}
              handleAuthentication={this.handleAuthentication}
            />
          )}
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


