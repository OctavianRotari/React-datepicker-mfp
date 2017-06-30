import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator, Text } from 'react-native';
import Section from '../Section';
import colors from '../../config/colors';
import { vss, tass } from '../../styles/styles';

class Vista extends Component {
  componentDidMount() {
    const { datapoints } = this.props;
    this.props.onLoaded(datapoints);
  }

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
    const { value, name } = this.props.activeForm;
    if(!value){
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
      <View style={{flex:1}}>
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
