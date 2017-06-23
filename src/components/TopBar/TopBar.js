import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TopBar extends Component {
  render() {
    return (
      <View
        style={
          {
            flex: 1, 
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5
          }
        }
      >
        <Text>Some stuff</Text>
      </View>
    )
  }
}

export default TopBar;
