import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Box from '../Box';
import styles from './styles';

class Toggle extends Component {
  render() {
    const values = Object.keys(this.props.values);
    return (
      <View>
        { values.map((value) => {
          return(<Box value={ value }/>)
        })}
      </View>
    );
  }
}

export default Toggle;
