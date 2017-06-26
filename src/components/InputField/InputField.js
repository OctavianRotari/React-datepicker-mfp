// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputFields from '../../constants/InputFields'
import { cmss } from '../../styles/styles';

class InputField extends Component {
  whichInputType() {
    const { ...other } = this.props;
    const { child } = this.props;
    const Wrapper = InputFields[child];
    return <Wrapper { ...other }/>;
  }

  render() {
    return(
      <View style= { cmss.flexOneRow } >
        <View style={[ cmss.flexOneRow, cmss.borderLeft ]} >
          { this.whichInputType() }
        </View>
      </View>
    )
  }
};

export default InputField;
