import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import TextBoxContainer from '../../containers/TextBoxContainer';

class TopBar extends Component {
  buildTopBar() {
    const { children } = this.props.topBar;
    return _.map(children, (child) => {
      return (
        <TextBoxContainer 
          key={child.label} 
          child={child} 
        />
      )
    })
  }

  render() {
    return (
      <View
        style={
          {
            flex: 1, 
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5
          }
        }
      >
        { this.buildTopBar() }
      </View>
    )
  }
}

export default TopBar;
