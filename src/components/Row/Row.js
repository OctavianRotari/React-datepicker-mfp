// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import RowComponentContainers from '../../containers/RowComponentsContainer';

import styles from './styles';

class Row extends Component {
  buildRow() {
    const { datapoints } = this.props;
    return _.map(datapoints, ( datapoint ) => {
      return(
        <RowComponentContainers
          componentType={ datapoint.control }
          label={ datapoint.label }
          values={ datapoint.values }
          name={ datapoint.name }
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

