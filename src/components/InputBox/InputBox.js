// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, TouchableHighlight } from 'react-native';
import { ifss } from '../../styles/styles';
import colors from '../../config/colors';

class InputBox extends Component {
  onTap() {
    const { onSelect, onDiscard, selected } = this.props;
    if(!selected) {
      return onSelect(this.props);
    }
    return onDiscard(this.props);
  }

  showLabel() {
    const { label, selected } = this.props;
    if(selected && label) {
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
          <Text
            style={ selected ? ifss.textSelected : ifss.text }
          >
              { value.toUpperCase() }
            </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default InputBox;
