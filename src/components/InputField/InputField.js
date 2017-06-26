// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputFields from '../../constants/InputFields'
import styles from './styles';
import css from '../../config/commonStyles.js';

class InputField extends Component {
  whichInputType() {
    const { ...other } = this.props;
    const { child } = this.props;
    const Wrapper = InputFields[child];
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

export default InputField;
