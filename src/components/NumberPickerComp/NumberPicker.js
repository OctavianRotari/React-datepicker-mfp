/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { ifss, cmss } from '../../styles/styles';

class NumberPicker extends Component {
  selectedValue() {
    const { values } = this.props.datapoint;
    const { selectedValue } = this.props;
    if(selectedValue) {
      return selectedValue;
    }
    return values.selected;
  }

  options() {
    const { start, end, step, aditionalValue } = this.props.datapoint.values;
    const options = [];
    for(var i = start; i <= end; i += step ){
      let num = i;
      if(step < 1) {
        num = num.toFixed(1);
      }
      const iStr = num.toString();
      options.push(iStr);
    }
    if(aditionalValue) {
      options.push(aditionalValue.toString());
    }
    return options;
  }

  render() {
    const { name, value, label, unit, control } = this.props.datapoint;
    const { selectedValue } = this.props;
    return (
      <TouchableHighlight
        style={[selectedValue ? ifss.containerBoxSelected : ifss.containerBox, cmss.borderRight]}
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.picker.show(); }}
      >
        <View style={ ifss.containerTextSelected }>
          <Text style={ ifss.labelVisible }>
            { label }
          </Text>
          <Text style={ selectedValue ? ifss.textSelected : ifss.text }>
            { `${this.selectedValue()} ${unit ? unit : ''}` }
          </Text>
          <SimplePicker
            ref={'picker'}
            selectedOption={ this.selectedValue() }
            options={ this.options() }
            onSubmit={
              (option) => {
                this.props.onSelect({name, unit, control, value: option})
              }
            }
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default NumberPicker;
