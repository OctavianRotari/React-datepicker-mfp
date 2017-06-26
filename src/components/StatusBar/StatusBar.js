import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

class StatusBarComponent extends Component {
  render() {
    return(
      <View style={styles.statusbar}>
        <StatusBar
          barStyle="light-content"
        />
      </View>
    )
  }
}

export default StatusBarComponent;
