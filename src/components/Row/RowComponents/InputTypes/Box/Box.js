// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../styles';

class Box extends Component {
  onTap() {
    const { parentType, name, value, selected } = this.props;
    const { onSelect, onDiscard } = this.props;
    if(!selected) {
      return onSelect( name, value, parentType );
    }
    return onDiscard( name, value, parentType );
  }

  showLabel() {
    const { label, selected } = this.props;
    if(selected) {
      return(
        <Text style={ styles.labelVisible }>
          { label }
        </Text>
      )
    }
  }

  render() {
    const { label, selected, value } = this.props;
    return (
      <TouchableHighlight
        style={ selected ? styles.containerBoxSelected : styles.containerBox }
        onPress={() => { this.onTap() }}
        underlayColor="#048fc0"
        activeOpacity={ 0.9 }
      >
        <View style={  selected ? styles.containerTextSelected : styles.containerText }>
          { this.showLabel() }
            <Text style={ selected ? styles.textSelected : styles.text }>
              { value }
            </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default Box;
