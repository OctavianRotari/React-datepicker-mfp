import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import Box from '../Box';
import styles from './styles';

class Numeral extends Component {
  render() {
    const { label } = this.props;
    const { selected } = this.props.values;
    return (
      <View
        style={
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        <Box value={ selected } label = { label }/>
      </View>
    );
  }
}

export default Numeral;
