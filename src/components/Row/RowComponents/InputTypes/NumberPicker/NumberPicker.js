/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import styles from '../styles';

class NumberPicker extends Component {
  selectedValue() {
    const { selectedValue, values } = this.props;
    if(selectedValue) {
      return selectedValue;
    }
    return values.selected;
  }

  options() {
    const { start, end, step } = this.props.values;
    const options = [];
    for(var i = start; i <= end; i += step ){
      let num = i;
      if(step < 1) {
        num = num.toFixed(2);
      }
      const iStr = num.toString();
      options.push(iStr);
    }
    return options;
  }

  showLabel() {
    const { label, selected } = this.props;
    if(selected) {
      return(
        <Text style={ styles.text }>
          { label }
        </Text>
      )
    }
  }

  render() {
    const { name, value, label, selected } = this.props;
    return (
      <TouchableHighlight
        style={ selected ? styles.containerBoxSelected : styles.containerBox }
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.picker.show(); }}
      >
      <View style={ selected ? styles.containerTextSelected : styles.containerText }>
        { this.showLabel() }
        <Text style={ selected ? styles.textSelected : styles.text }>
          { this.selectedValue() }
        </Text>
          <SimplePicker
            ref={'picker'}
            options={this.options()}
            onSubmit={
              (option) => {
                console.log('option', option);
                this.props.onSelect( name, option )
              }
            }
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default NumberPicker;
