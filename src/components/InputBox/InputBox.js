// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, TouchableHighlight } from 'react-native';
import { ifss } from '../../styles/styles';
import colors from '../../config/colors';

class InputBox extends Component {
  onTap() {
    const { control, name, value, selected } = this.props;
    const { onSelect, onDiscard } = this.props;
    if(!selected) {
      return onSelect( name, value, control );
    }
    return onDiscard( name, value, control );
  }

  showLabel() {
    const { label, selected } = this.props;
    if(selected) {
      return(
        <Text style={ ifss.labelVisible }>
          { label }
        </Text>
      )
    }
  }

  render() {
    const { label, selected, value } = this.props;
    return (
      <TouchableHighlight
        style={ selected ? ifss.containerBoxSelected : ifss.containerBox }
        onPress={() => { this.onTap() }}
        underlayColor={ colors.secCol }
        activeOpacity={ 0.9 }
      >
        <View style={  selected ? ifss.containerTextSelected : ifss.containerText }>
          { this.showLabel() }
            <Text style={ selected ? ifss.textSelected : ifss.text }>
              { value.toUpperCase() }
            </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default InputBox;
