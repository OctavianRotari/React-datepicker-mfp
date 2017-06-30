import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ActivityIndicator } from 'react-native';
import TextBox from '../TextBox';
import colors from '../../config/colors';
import { cmss, tass } from '../../styles/styles';

class TopBar extends Component {
  buildTopBar() {
    const { children } = this.props.topBar;
    const { components } = this.props;
    let id = 0;
    return _.map(children, (component) => {
      const { value, unit } = components[component.child];
      if(value) {
        id += 1;
        return (
          <TextBox
            key={ id }
            component={ component }
            value={ value }
            unit={ unit }
          />
        )
      }
      return;
    })
  }

  render() {
    const { components } = this.props;
    if(_.isEmpty(components)){
      return(
        <View style={{flex:1}}>
          <ActivityIndicator
            style={ tass.actInd }
            color={ colors.secCol }
            size="large"
          />
        </View>
      )
    }
    return (
      <View style={[ cmss.borderTop, cmss.borderBottom, cmss.flexOneRow ]}>
        { this.buildTopBar() }
      </View>
    )
  }
}

export default TopBar;
