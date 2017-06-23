import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';

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
          <Text key={id} style={{ flex:1 }}>
            { textBoxValue } 
          </Text>
      )
    })
  }

  render() {
    const { lable } = this.props.child;
    return(
      <View style={{flex:1, flexDirection:'column'}}>
        <Text style={{ flex:1 }}>{ lable }</Text>
        <View style={{flex:1, flexDirection:'row'}}>
          { this.checkBoxState() }
        </View>
      </View>
    )
  }
}

export default TextBox;
