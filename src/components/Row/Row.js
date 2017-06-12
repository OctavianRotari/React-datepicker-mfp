// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import Toggle from '../Toggle';
import Numeral from '../Numeral';
import Segmented from '../Segmented';
import styles from './styles';

class Row extends Component {
  constructor(props) {
    super(props);
    this.rowComponents = this.props.rowComponents;
    this.components = [];
  }

  createComponent(component) {
    switch (component.control) {
      case 'toggle':
        return (
          <Toggle 
            key={component.name} 
            values={component.values} 
            numOfBoxes={ this.props.numOfBoxes }
          />
        )
        break;
      case 'numeral':
        return (
          <Numeral 
            key={component.name} 
            values={component.values}
            numOfBoxes={ this.props.numOfBoxes }
          />
        )
          break;
      case 'segmented':
        return (
          <Segmented 
            key={component.name} 
            values={component.values}
            numOfBoxes={ this.props.numOfBoxes }
          />
        )
          break;
    }
  }

  createComponents() {
    for (let k in this.rowComponents ){
      this.components.push(this.rowComponents[k])
    };

    return _.map(this.components, component => {
      return this.createComponent(component);
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        { this.createComponents() }
      </View>
    );
  }
}

export default Row;
