import React, { Component } from 'react';
import Toggle from '../Toggle'
import Row from '../Row'
import styles from './styles';
import {
  View
} from 'react-native';

class Standby extends Component {
  render() {
    const { gender, age } = this.props.datapoints;
    return (
      <View>
        <Row rowComponents = { { gender, age } } />
      </View>
    );
  }
}

export default Standby;
