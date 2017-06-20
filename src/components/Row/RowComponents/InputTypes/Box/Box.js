// @flow
import React, { Component } from 'react';
import _ from 'lodash';
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
import DatePicker from 'react-native-datepicker';
import SimplePicker from 'react-native-simple-picker';

class Box extends Component {
  isSelected() {
    const { parentType, value, name } = this.props;
    const { selectedValues } = this.props;
    if(parentType === 'Segmented'){
      return _.includes(selectedValues, value);
    } else if ( selectedValues[name] === value ){
      return true;
    }
    return false;
  }

  onTap() {
    const { parentType, name, value } = this.props;
    const { onSelect, onDiscard } = this.props;
    return onSelect( name, value, parentType );
  }

  selectedValue() {
    const { selectedValues, values } = this.props;
    if(selectedValues) {
      return selectedValues;
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

  isDatePicker() {
    const { name } = this.props;
    return(
      <DatePicker
        style={{flex: 1}}
        date={this.selectedValue()}
        mode="datetime"
        placeholder="Select time"
        format="MMMM Do YYYY, h:mm:ss a"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={ false }
        onDateChange={
          (date) => {this.props.onSelect( name, date )}
        }
      />
    )
  }

  isNumberPicker() {
    const { values, label, name } = this.props;
    return(
      <View>
        <Text style={ styles.text }>{ values.selected }</Text>
        <SimplePicker
          ref={'picker'}
          options={this.options()}
          onSubmit={
            (option) => {this.props.onSelect( name, option )}
          }
        />
      </View>
    )
  }

  isNormalBox() {
    const { value } = this.props;
    return(
      <Text style={ styles.text }>
        { value }
      </Text>
    )
  }

  whichType() {
    const { parentType } = this.props;
    switch(parentType){
      case('Numeral'):
        return this.isNumberPicker();
      case('Datetime'):
        return this.isDatePicker();
      default:
        return this.isNormalBox();
    }
  }

  render() {
    const { label } = this.props;
    return (
      <TouchableHighlight
        style={ this.isSelected() ? styles.containerBoxSelected : styles.containerBox }
        onPress={() => { this.onTap() }}
        underlayColor="#048fc0"
        activeOpacity={ 0.9 }
      >
        <View style={ styles.containerText }>
          <Text style={ styles.text }>
            { label }
          </Text>
          { this.whichType() }
        </View>
      </TouchableHighlight>
    );
  }
};

export default Box;
