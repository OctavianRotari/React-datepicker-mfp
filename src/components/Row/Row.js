// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import RowComponent from './RowComponents';

import styles from './styles';

class Row extends Component {
  buildRow() {
    let rowDatapoints = {};
    this.props.rowComponents.forEach((component) => {
      const { datapoints } = this.props;
      rowDatapoints[component] = datapoints[component] 
    });

    return _.map(rowDatapoints, ( datapoint ) => {
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

