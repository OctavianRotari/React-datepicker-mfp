import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import Box from '../Box';
import styles from './styles';

class Segmented extends Component {
  renderBoxes() {
    return _.map(this.props.values, value => {
      return (
        <Box
          value={ value }
          key={ value }
          numOfBoxes={ this.props.numOfBoxes }
        />
      );
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        { this.renderBoxes() }
      </View>
    );
  }
}

export default Segmented;
