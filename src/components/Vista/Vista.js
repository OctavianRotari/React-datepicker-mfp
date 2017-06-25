import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator, Text } from 'react-native';
import Section from '../Section';
import styles from './styles';

class Vista extends Component {
  renderSections() {
    const { children } = this.props.forms;
    let id = 0;
    return _.map(children, (section, index) => {
      id += 1;
      const { name, label, showLabel, children } = section;
      const showBorder = children.length === index + 1 ? null : styles.sectionBorder
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
    const { name } = this.props.forms;
    return (
      <View style={{flex:1}}>
        <View style={ styles.vistaTitleContainer }>
          <Text style={ styles.vistaTitleText }
          >{ name.toUpperCase() }</Text>
        </View>
        <View style={{flex:19}}>
          { this.renderSections() }
        </View>
      </View>
    );
  }
}

export default Vista;
