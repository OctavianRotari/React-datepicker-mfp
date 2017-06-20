// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import RowComponent from './RowComponents';

import styles from './styles';

class Row extends Component {
  buildRow() {
    const { datapoints } = this.props;
    return _.map(datapoints, ( datapoint ) => {
      return(
        <RowComponent
          datapoint={ datapoint }
          key={ datapoint.label }
        />
      )
    })
  }

  render() {
    return (
      <View style={ styles.row }>
        { this.buildRow() }
      </View>
    );
  }
}

export default Row;

