// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator, Text } from 'react-native';
import RowComponents from './RowComponents/';
import styles from './styles';

class Row extends Component {
  componentDidMount() {
    const { children } = this.props.rowComponents;
    _.map(children, child => {
      this.props.onGetDatapoint(child);
    });
  }

  replaceWithDatapoint(child) {
    const { collection } = this.props.datapoints;
    if( collection && collection[child] ) {
      return collection[child]
    }
  }

  buildRow() {
    let numOfBoxes = 0;
    const { children } = this.props.rowComponents;
    return _.map(children, child => {
      const datapoint = this.replaceWithDatapoint(child);
      if( datapoint ) {
        numOfBoxes += datapoint.values.length;
        const Wrapper = RowComponents[datapoint.control];
        return(
          <Wrapper
            label={ datapoint.label }
            values={ datapoint.values }
          />
        )
      }
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
      <View style={ styles.row }>
        { this.buildRow() }
      </View>
    );
  }
}

export default Row;

