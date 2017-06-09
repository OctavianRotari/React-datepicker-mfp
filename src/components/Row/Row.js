import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Row extends Component {
  render() {
    const Wrapper = this.props.wrapper;
    return (
      <View>
        <Wrapper values={ this.props.values }/>
      </View>
    );
  }
}

export default Row;
