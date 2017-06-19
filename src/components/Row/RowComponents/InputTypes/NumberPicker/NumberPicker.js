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
import styles from './styles';

class NumberPicker extends Component {
  isSelectedStyle() {
    const { isSelected } = this.props;
    if(isSelected){
      return styles.containerBoxSelected
    } else {
      return styles.containerBox
    }
  }

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

  render() {
    const { name, value, label, isSelected } = this.props;
    const style = this.isSelectedStyle();
    return (
      <TouchableHighlight
        style={ style }
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => {
          this.refs.picker.show();
        }}
      >
        <View style={styles.containerText}>
          <Text style={ styles.text }>
            { label }
          </Text>
          <Text style={styles.text}>{ this.selectedValue() }</Text>
          <SimplePicker
            ref={'picker'}
            options={this.options()}
            onSubmit={
              (option) => {this.props.onSelect( name, option )}
            }
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default NumberPicker;
