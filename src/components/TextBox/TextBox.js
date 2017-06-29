import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { View, Text } from 'react-native';
import { cmss, ifss } from '../../styles/styles';
import colors from '../../config/colors';
import Timer from '../Timer';

class TextBox extends Component {
  checkBoxState() {
    const { value, unit } = this.props;
    console.log(this.props);
    const { format, countDirection, type } = this.props.component;
    let textBoxValue;
    if(type === 'timer'){
      return (
        <Timer
          countDirection={ countDirection }
          format={ format }
          timestamp={ value }
        />
      )
    }
    return(
      <Text style={[ ifss.textSelected, ifss.topBarText ]}>
        { ` ${value} ${ unit ? unit : ''}` }
      </Text>
    )
  }

  render() {
    const { label, highlight } = this.props.component;
    const backgroundColor = highlight ? colors.backgroundSec : 'transparent';
    return(
      <View style={
        [
          cmss.flexOneCol,
          ifss.containerTextSelected,
          { maxWidth: 128, backgroundColor: backgroundColor }
        ]
      }>
        <Text style={ ifss.labelVisible }>{ label }</Text>
        { this.checkBoxState() }
      </View>
    )
  }
}

export default TextBox;
