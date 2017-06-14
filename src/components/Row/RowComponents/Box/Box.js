import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
const { width } = Dimensions.get('window');

const Box = (props) => {
  return (
    <TouchableHighlight
      style={ styles.containerBox }
      onPress={() => {alert(props.value)}}
      underlayColor="#048fc0"
      activeOpacity={0.9}
    >
      <View style={ styles.containerText }>
        <Text style={ styles.text }>
          { props.label }
        </Text>
        <Text style={ styles.text }>
          { props.value }
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Box;
