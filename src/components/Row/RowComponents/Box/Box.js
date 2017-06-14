import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
const { width } = Dimensions.get('window');

const Box = (props) => {
  return (
    <View style={ styles.containerBox }>
      <View style={ styles.containerText }>
        <Text style={ styles.text }>
          { props.label }
        </Text>
        <Text style={ styles.text }>
          { props.value }
        </Text>
      </View>
    </View>
  );
};

export default Box;
