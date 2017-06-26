// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypes from '../InputTypes'
import styles from './styles';
import css from '../../../../config/commonStyles.js';

class InputType extends Component {
  whichInputType() {
    const { ...other } = this.props;
    const { childType } = this.props;
    const Wrapper = InputTypes[childType];
    return <Wrapper { ...other }/>;
  }

  render() {
    return(
      <View style= { css.flexOneRow } >
        <View style={[ css.flexOneRow, styles.borderLeft ]} >
              { this.whichInputType() }
        </View>
      </View>
    )
  }
};

export default InputType;
