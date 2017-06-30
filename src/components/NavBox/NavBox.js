import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { ifss, cmss } from '../../styles/styles';

class NavBox extends Component {
  render() {
    const { value, name, selected, forms } = this.props;
    const highLight = selected ? ifss.containerBoxSelected : ifss.containerBox;
    return(
      <TouchableHighlight
        style={[ highLight, { maxHeight: 51} ]}
        onPress={() => { 
          this.props.onTap(value, forms) 
        }}
        underlayColor="#048fc0"
        activeOpacity={ 0.9 }
      >
        <View style={[ifss.containerText, cmss.borderBottom]}>
          <Text style={ ifss.textSelected }>{ name.toUpperCase() }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default NavBox;
