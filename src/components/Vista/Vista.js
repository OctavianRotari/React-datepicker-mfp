import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator } from 'react-native';
import Section from '../Section';
import styles from './styles';

class Vista extends Component {
  renderSections() {
    const { children } = this.props.forms;
    return _.map(children, child => {
      const { name } = child;
      return(
        <Section 
          key={ name } 
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
