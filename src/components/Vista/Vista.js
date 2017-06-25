import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator } from 'react-native';
import Section from '../Section';
import styles from './styles';

class Vista extends Component {
  renderSections() {
    const { children } = this.props.forms;
    let id = 0;
    return _.map(children, child => {
      id += 1;
      const { name, label, showLabel } = child;
      return(
        <Section 
          key={ id } 
          label={ label }
          showLabel={ showLabel }
          rows={ child.children }
        />
      )
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        { this.renderSections() }
      </View>
    );
  }
}

export default Vista;
