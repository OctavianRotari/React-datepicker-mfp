import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { View, Text } from 'react-native';
import { cmss, ifss } from '../../styles/styles';
import Timer from '../Timer';

class TextBox extends Component {
  checkBoxState() {
    const { components } = this.props;
    const { children, format, countDirection, type } = this.props.child;
    let textBoxValue;
    let id = 0;
    return _.map(children, (child) => {
      id += 1;
      if(components[child].value) {
        textBoxValue = ` ${components[child].value}`;
        if(type === 'timer'){
          return (
            <Timer
              key={ id }
              countDirection={ countDirection }
              format={ format }
              timestamp={ components[child].value }
              style={ ifss.textSelected }
            />
          )
        }
      } else {
        textBoxValue = '/';
      }
      return(
        <Text key={id} style={ ifss.textSelected }>
          { textBoxValue }
        </Text>
      )
    })
  }

  render() {
    const { lable } = this.props.child;
    return(
      <View style={[ cmss.flexOneCol, ifss.containerTextSelected ]}>
        <Text style={ ifss.labelVisible }>{ lable }</Text>
        <View style={ [ifss.containerText, { flex:1, flexDirection: 'column'}] }>
          { this.checkBoxState() }
        </View>
      </View>
    )
  }
}

export default TextBox;
