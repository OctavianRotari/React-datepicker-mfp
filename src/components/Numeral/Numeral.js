import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import Box from '../Box';
import styles from './styles';

class Numeral extends Component {
  renderBoxes() {
    return _.map(this.props.values, value => {
      return (
        <Box value={value}/>
      );
    })
  }

  render() {
    return (
      <View>
        { this.renderBoxes() }
      </View>
    );
  }
}

export default Numeral;
