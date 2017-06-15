import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import BoxContainer from '../../../../containers/BoxContainer'
import styles from './styles';

class Datetime extends Component {
  render() {
    const { label, name } = this.props;
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
        <BoxContainer
          value={ currentTime }
          label={ label }
          name={ name }
        />
      </View>
    );
  }
}

export default Datetime;
