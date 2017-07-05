import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ActivityIndicator } from 'react-native';
import TextBoxContainer from '../../containers/TextBoxContainer';
import colors from '../../config/colors';
import { cmss, tass } from '../../styles/styles';

class TopBar extends Component {
  buildTopBar() {
    const { children } = this.props.topBar;
    let id = 0;
    return _.map(children, (component) => {
      id += 1;
      return (
        <TextBoxContainer
          key={ id }
          component={ component }
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
