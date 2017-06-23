import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import NavBoxContainer from '../../containers/NavBoxContainer';

class NavSidebar extends Component {
  buildNavBox() {
    const { forms } = this.props;
    let id = 0;
    return _.map(forms, (form) => {
      id += 1;
      return (
        <NavBoxContainer 
          key={id} 
          value={ form.value }
          name={ form.name }
        />
      );
    })
  }

  render() {
    return (
      <View
        style={
          {
            flex: 1, 
            flexDirection: 'column',
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5
          }
        }
      >
        { this.buildNavBox() }
      </View>
    )
  }
}

export default NavSidebar;
