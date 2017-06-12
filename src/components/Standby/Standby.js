import React, { Component } from 'react';
import Toggle from '../Toggle'
import Row from '../Row'
import styles from './styles';
import {
  View,
  Text
} from 'react-native';

class Standby extends Component {
  render() {
    const { gender, age, mechanism } = this.props.datapoints;
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <View style={styles.container, styles.steelBlue}>
            <Row rowComponents = { { gender, age } } numOfBoxes = { 3 }/>
          </View>
          <View style={styles.container, styles.powderBlue}>
            <Row rowComponents = { { mechanism } } numOfBoxes = { 6 }/>
          </View>
        </View>
        <View>
          <Text>Notes</Text>
        </View>
      </View>
    );
  }
}

export default Standby;
