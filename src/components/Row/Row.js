// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import RowComponent from './RowComponents';

import styles from './styles';

class Row extends Component {
  buildRow() {
    return _.map(this.props.rowDatapoints, ( datapoint ) => {
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
      <View style={{flex:1, flexDirection: 'row'}}>
        { this.buildRow() }
      </View>
    );
  }
}

export default Row;

