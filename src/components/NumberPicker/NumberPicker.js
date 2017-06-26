/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { IFS } from '../../styles/styles';

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

  render() {
    const { name, value, label, selected } = this.props;
    return (
      <TouchableHighlight
        style={ selected ? IFS.containerBoxSelected : IFS.containerBox }
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.picker.show(); }}
      >
        <View style={ IFS.containerTextSelected }>
          <Text style={ IFS.labelVisible }>
            { label }
          </Text>
          <Text style={ selected ? IFS.textSelected : IFS.text }>
            { this.selectedValue() }
          </Text>
          <SimplePicker
            ref={'picker'}
            options={ this.options() }
            onSubmit={
              (option) => {
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
