import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator, Text } from 'react-native';
import Section from '../Section';
import colors from '../../config/colors';
import { vss, tass, cmss } from '../../styles/styles';

class Vista extends Component {
  renderSections() {
    const { children } = this.props.activeForm;
    let id = 0;
    return _.map(children, (section, index) => {
      id += 1;
      const { name, label, showLabel, children } = section;
      const showBorder = children.length === index + 1 ? null : vss.sectionBorder
      return(
        <View key={ id } style= {[{ flex: children.length } , showBorder]}>
          <Section
            style={{ flex: children.length }}
            label={ label }
            showLabel={ showLabel }
            rows={ children }
          />
        </View>
      )
    })
  }

  render() {
    const { name } = this.props.activeForm;
    if(!name){
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
      <View style={[{flex:1}, cmss.borderRight]}>
        <View style={ vss.vistaTitleContainer }>
          <Text style={ vss.vistaTitleText }>
            { name.toUpperCase() }
          </Text>
        </View>
        <View style={{flex:19}}>
          { this.renderSections() }
        </View>
      </View>
    );
  }
}

export default Vista;
