import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import Box from '../Box';
import styles from './styles';

class Toggle extends Component {
  renderBoxes() {
    const { label } = this.props;
    return _.map(this.props.values, value => {
      return (
        <Box
          value={ value }
          label={ label }
          key={ value }
        />
      );
    })
  }

  render() {
    return (
      <View
        style= {
          {
            flex: this.props.values.length,
            flexDirection: 'row'
          }
        }
      >
        { this.renderBoxes() }
      </View>
    );
  }
}

export default Toggle;
