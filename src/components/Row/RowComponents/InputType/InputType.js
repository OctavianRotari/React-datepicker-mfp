// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypes from '../InputTypes'

class InputType extends Component {
  whichInputType() {
    const { ...other } = this.props;
    const { childType } = this.props;
    const Wrapper = InputTypes[childType];
    return <Wrapper { ...other }/>;
  }

  render() {
    return(
      <View
        style= {
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        { this.whichInputType() }
      </View>
    )
  }
};

export default InputType;
