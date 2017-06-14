import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import Box from '../Box';
import styles from './styles';

class Datetime extends Component {
  render() {
    const { label } = this.props;
    const currentTime = 'Time';
    return (
      <View
        style= {
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        <Box
          value={ currentTime }
          label={ label }
        />
      </View>
    );
  }
}

export default Datetime;
