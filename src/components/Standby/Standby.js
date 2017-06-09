import React, { Component } from 'react';
import Toggle from '../Toggle'
import Row from '../Row'
import styles from './styles';
import {
  View
} from 'react-native';

class Standby extends Component {
  render() {
    const datapoints = this.props.datapoints;
    return (
      <View>
        <Row
          type="toggle"
          wrapper={ Toggle }
          values={ datapoints.gender.values }
        />
      </View>
    );
  }
}

export default Standby;
