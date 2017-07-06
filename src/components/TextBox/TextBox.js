import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { View, Text } from 'react-native';
import { cmss, ifss } from '../../styles/styles';
import colors from '../../config/colors';
import Timer from '../Timer';

class TextBox extends Component {
  checkBoxState() {
    const { selectedValue, unit } = this.props;
    const { format, countDirection, type } = this.props.component;
    if(Array.isArray(selectedValue)) {
      let id = 0;
      return _.map(selectedValue, val => {
        id += 1;
        return (
          <Text style={[ ifss.textSelected, ifss.topBarText ]} key={ id }>
            { val.toUpperCase() }
          </Text>
        )
      })
    }
    if(type === 'timer'){
      return (
        <Timer
          countDirection={ countDirection }
          format={ format }
          timestamp={ selectedValue }
        />
      )
    }
    return(
      <Text style={[ ifss.textSelected, ifss.topBarText ]}>
        { ` ${selectedValue.toString().toUpperCase()} ${ unit ? unit : ''}` }
      </Text>
    )
  }

  render() {
    const { selectedValue } = this.props;
    if(!selectedValue) {
      return <View/>;
    }
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
        <Text style={[ifss.labelVisible, {marginTop: 5}]}>{ label }</Text>
        <View style={[ cmss.flexOneRow ]}>
          { this.checkBoxState() }
        </View>
      </View>
    )
  }
}

export default TextBox;
