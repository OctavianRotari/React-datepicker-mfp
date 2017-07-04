// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import InputTypes from '../../constants/InputTypes';
import InputFieldContainer from '../../containers/InputFieldContainer';

class InputType extends Component {
  renderInputField() {
    const { ...other } = this.props.datapoint
    const { control, values } = this.props.datapoint;
    const { Toggle, Segmented } = InputTypes;
    if(control === Toggle.value || control === Segmented.value) {
      const { child } = InputTypes[control];
      let key = 0;
      return _.map(values, value => {
        key += 1;
        return (
          <InputFieldContainer
            key={ key }
            { ...other }
            value={ value }
            child={ child }
          />
        );
      });
    }
    const { child } = InputTypes[control];
    return (
      <InputFieldContainer
        { ...other }
        values={ values }
        child={ child }
      />
    )
  }

  render() {
    const { values } = this.props.datapoint;
    const numberOfCubes = values.length ? values.length : 1;
    return(
      <View
        style={ { flex: numberOfCubes, flexDirection: 'row' } } >
        { this.renderInputField() }
      </View>
    )
  }
}

export default InputType;
