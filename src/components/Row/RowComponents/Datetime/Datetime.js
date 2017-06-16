import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import DatePicker from '../DatePicker'
import styles from './styles';

class Datetime extends Component {
  render() {
    const { label, name } = this.props;
    return (
      <View
        style= {
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        <DatePicker
          label={ label }
          name={ name }
          isSelected={ true }
        />
      </View>
    );
  }
}

export default Datetime;
