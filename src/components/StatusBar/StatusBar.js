import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class StatusBar extends Component {
  render() {
    return(
      <View>
        <View style={styles.statusbar}/>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>Trauma Standby</Text>
        </View>
      </View>
    )
  }
}

export default StatusBar;
