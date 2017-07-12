import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  PickerIOS,
  Dimensions,
} from 'react-native';

const PickerItemIOS = PickerIOS.Item;

class NumberPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.selectedOption,
    }
  }

  onOptionChange(option) {
    this.setState({
      selectedOption: option,
    })
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

  renderItem(option, index) {
    const label = (this.props.labels) ? this.props.labels[index] : option;
    return (
      <PickerItemIOS
        key={option}
        value={option}
        label={label}
        style={{fontSize:10}}
      />
    );
  }

  render() {
    return (
      <PickerIOS
        ref={'picker'}
        style={{alignSelf:'stretch'}}
        selectedValue={ this.state.selectedOption }
        onValueChange={(option) => this.onOptionChange(option)}
      >
        {this.options().map((option, index) => this.renderItem(option, index))}
      </PickerIOS>
    );
  }
}

export default NumberPicker;
