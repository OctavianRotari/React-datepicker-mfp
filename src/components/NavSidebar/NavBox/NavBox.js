import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { View, Text } from 'react-native';

class NavBox extends Component {
  render() {
    const { value, name } = this.props;
    return(
      <TouchableHighlight
        style={{flex:1}}
        onPress={() => { 
          this.props.onSelectForm(value) 
        }}
        underlayColor="#048fc0"
        activeOpacity={ 0.9 }
      >
        <View style={{flex:1}}>
          <Text>{ name }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default NavBox;
