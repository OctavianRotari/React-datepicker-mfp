import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import Section from '../Section';
import styles from './styles';

class Vista extends Component {
  renderSections() {
    const name = this.props.name;
    const children = this.props.form;
    return _.map(children[name], child => {
      return(
        <Section key={ child.name } rows={ child }/>
      )
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        { this.renderSections() }
      </View>
    );
  }
}

export default Vista;
