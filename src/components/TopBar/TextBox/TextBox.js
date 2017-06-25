import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import css from '../../../config/commonStyles';
import styles from './styles';

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
          <Text key={id} style={ styles.textSelected }>
            { textBoxValue }
          </Text>
      )
    })
  }

  render() {
    const { lable } = this.props.child;
    return(
      <View style={[ css.flexOneCol,
          {
            flex: 1,
            alignItems:'center',
            justifyContent:'center',
          }
      ]}>
        <Text style={ styles.labelVisible }>{ lable }</Text>
        <View style={ styles.containerText }>
          { this.checkBoxState() }
        </View>
      </View>
    )
  }
}

export default TextBox;
