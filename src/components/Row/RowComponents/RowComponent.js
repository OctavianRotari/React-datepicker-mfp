// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import BoxContainer from '../../../containers/BoxContainer'

class RowComponent extends Component {
  renderBoxes() {
    const { control, name, label, values } = this.props.datapoint;
    return _.map(values, value => {
      return (
        <BoxContainer
          parentType={ control }
          value={ value }
          label={ label }
          name={ name }
          key={ value }
        />
      );
    })
  }

  renderBox() {
  const { control, name, label, values } = this.props.datapoint;
    return(
      <BoxContainer 
        parentType={ control }
        values={ values } 
        label={ label }
        name={ name }
      />
    )
  }

  whichChild() {
    const { control, values } = this.props.datapoint;
    const controlTypeNumber = 
      control === 'Numeral' || 
      control === 'Datetime';
    if(controlTypeNumber) {
      return this.renderBox();
    } else {
      return this.renderBoxes();
    }
  }

  render() {
    const { values } = this.props.datapoint;
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
