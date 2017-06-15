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
  isSelected() {
    const { name, value } = this.props;
    const selectedName = this.props.selectedValues[name]
    if(!selectedName) {
      return styles.containerBox 
    }
    if(selectedName.value === value){
      return styles.containerBoxSelected 
    } else {
      return styles.containerBox 
    }
  }

  render() {
    const { label, name, value } = this.props;
    const style = this.isSelected();
    return (
      <TouchableHighlight
        style={ style }
        onPress={() => {
          this.props.onSelect(name, value);
        }}
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
