// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator, Text } from 'react-native';
import RowContainers from '../../containers/rowContainers';
import styles from './styles';

class Row extends Component {
  componentDidMount() {
    const { children } = this.props.rowComponents;
    _.map(children, ( child: string ) => {
      this.props.onGetDatapoint(child);
    });
  }

  replaceWithDatapoint(child: string) {
    const { collection } = this.props.datapoints;
    if( collection && collection[child] ) {
      return collection[child]
    }
  }

  buildRow() {
    const { children } = this.props.rowComponents;
    return _.map(children, ( child: string ) => {
      const datapoint = this.replaceWithDatapoint(child);
      if( datapoint ) {
        const Wrapper = RowContainers[`${datapoint.control}Container`];
        return(
          <Wrapper
            label={ datapoint.label }
            values={ datapoint.values }
            name={ datapoint.name }
            key={ datapoint.label }
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

