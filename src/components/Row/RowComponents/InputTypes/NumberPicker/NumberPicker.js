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
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

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

  options() {
    console.log(this.props);
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
    const { value, isSelected } = this.props;
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
          { this.showLabel( style ) }
          <Text style={styles.text}>{this.state.selectedOption}</Text>
          <SimplePicker
            ref={'picker'}
            options={this.options()}
            onSubmit={(option) => {
              this.setState({
                selectedOption: option,
              });
            }}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default NumberPicker;
