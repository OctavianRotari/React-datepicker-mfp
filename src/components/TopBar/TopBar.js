import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import TextBoxContainer from '../../containers/TextBoxContainer';
import { cmss } from '../../styles/styles';

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
      <View style={[ cmss.borderTop, cmss.borderBottom, cmss.flexOneRow ]}>
        { this.buildTopBar() }
      </View>
    )
  }
}

export default TopBar;
