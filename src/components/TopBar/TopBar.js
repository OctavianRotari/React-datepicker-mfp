import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import TextBoxContainer from '../../containers/TextBoxContainer';

class TopBar extends Component {
  buildTopBar() {
    const { children } = this.props.topBar;
    let id = 0;
    return _.map(children, (child) => {
      id += 1;
      return (
        <TextBoxContainer 
          key={id} 
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
