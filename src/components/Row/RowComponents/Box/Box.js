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
  isSelectedStyle() {
    const { isSelected } = this.props;
    if(isSelected){
      return styles.containerBoxSelected
    } else {
      return styles.containerBox
    }
  }

  showLabel() {
    const { label, isSelected } = this.props;
    if(isSelected) {
      return(
        <Text style={ styles.text }>
          { label }
        </Text>
      )
    }
  }

  onTap() {
    const { parentType, name, value, isSelected } = this.props;
    const { onSelect, onDiscard } = this.props;
    if(!isSelected){
      return onSelect( name, value, parentType );
    }
    return onDiscard( name, value, parentType )
  }

  render() {
    const { parentType, label, name, value, isSelected } = this.props;
    const style = this.isSelectedStyle();
    return (
      <TouchableHighlight
        style={ style }
        onPress={() => { this.onTap() }}
        underlayColor="#048fc0"
        activeOpacity={0.9}
      >
        <View style={ styles.containerText }>
          { this.showLabel( style ) }
          <Text style={ styles.text }>
            { value }
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default Box;
