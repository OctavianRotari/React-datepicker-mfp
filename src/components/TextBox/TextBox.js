import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { cmss, ifss } from '../../styles/styles';

class TextBox extends Component {
  checkBoxState() {
    const { components } = this.props;
    const { children } = this.props.child;
    let textBoxValue;
    let id = 0;
    return _.map(children, (child) => {
      id += 1;
      if(components[child].value) {
        textBoxValue = components[child].value;
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
        <View style={ ifss.containerText }>
          { this.checkBoxState() }
        </View>
      </View>
    )
  }
}

export default TextBox;
