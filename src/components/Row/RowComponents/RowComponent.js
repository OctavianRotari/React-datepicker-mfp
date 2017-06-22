// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import rowComponentTypes from '../../../constants/rowComponentTypes';
import InputTypesContainer from '../../../containers/InputTypesContainer'

class RowComponent extends Component {
  renderBoxes(childtType) {
    const { control, name, label, values } = this.props.datapoint;
    return _.map(values, value => {
      return (
        <InputTypesContainer
          parentType={ control }
          childType={ childtType }
          value={ value }
          label={ label }
          name={ name }
          key={ value }
        />
      );
    })
  }

  renderBox(childtType) {
  const { control, name, label, values } = this.props.datapoint;
    return(
      <InputTypesContainer 
        parentType={ control }
        childType={ childtType }
        values={ values } 
        label={ label }
        name={ name }
      />
    )
  }

  whichChild() {
    const { control, values } = this.props.datapoint;
    switch(control) {
      case rowComponentTypes.NUMERAL: {
        return this.renderBox('NumberPicker')
      }
      case rowComponentTypes.DATETIME: {
        return this.renderBox('DatePicker')
      }
      default: {
        return this.renderBoxes('Box');
      }
    }
  }

  render() {
    const { control, name, label, values } = this.props.datapoint;
    const numberOfCubes = values.length ? values.length : 1; 
    return(
      <View
        style= {
          {
            flex: numberOfCubes,
            flexDirection: 'row'
          }
        }
      >
        { this.whichChild() }
      </View>
    )
  }
}

export default RowComponent;
