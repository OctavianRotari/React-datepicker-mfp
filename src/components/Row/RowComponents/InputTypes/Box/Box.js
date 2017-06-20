// @flow
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

class Box extends Component {
  onTap() {
    const { parentType, name, value, isSelected } = this.props;
    const { onSelect, onDiscard } = this.props;
    if(!isSelected){
      return onSelect( name, value, parentType );
    }
    return onDiscard( name, value, parentType )
  }

  render() {
    const { value, label, isSelected } = this.props;
    return (
      <TouchableHighlight
        style={ isSelected ? styles.containerBoxSelected : styles.containerBox }
        onPress={() => { this.onTap() }}
        underlayColor="#048fc0"
        activeOpacity={0.9}
      >
        <View style={ styles.containerText }>
          <Text style={ styles.text }>
            { label }
          </Text>
          <Text style={ styles.text }>
            { value }
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default Box;