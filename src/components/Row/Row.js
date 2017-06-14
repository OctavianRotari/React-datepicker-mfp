// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import RowComponents from './RowComponents/';
import styles from './styles';

class Row extends Component {

  buildComponents() {
    const rowComponents = this.props.rowComponents;
    return _.map(rowComponents, component => {
      const Wrapper = RowComponents[component.control];
      return <Wrapper values={component.values} />
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        { this.buildComponents() }
      </View>
    );
  }
}

export default Row;
