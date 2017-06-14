// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator, Text } from 'react-native';
import RowComponents from './RowComponents/';
import styles from './styles';

class Row extends Component {
  componentDidMount() {
    const { rowComponents } = this.props
    _.map(rowComponents, component => {
      component.children.map(child => {
        this.props.onGetDatapoint(child);
      })
    });
  }

  buildComponents() {
    const rowComponents = this.props.rowComponents;
    return _.map(rowComponents, component => {
      const Wrapper = RowComponents[component.control];
      return <Wrapper values={component.values} />
    })
  }

  render() {
    const { inProgress } = this.props.datapoints;
    if(inProgress) {
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>Row</Text>
      </View>
    );
  }
}

export default Row;
