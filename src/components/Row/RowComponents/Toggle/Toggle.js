import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypesContainer from '../../../../containers/rowContainers/InputTypesContainer'
import styles from './styles';

class Toggle extends Component {
  isSelected(value) {
    const { selectedValue } = this.props;
    if(selectedValue === value) {
      return true;
    }
    return false
  }

  renderBoxes() {
    const { label, name } = this.props;
    return _.map(this.props.values, value => {
      return (
        <InputTypesContainer
          childType={ 'Box' }
          parentType={ 'Toggle' }
          value={ value }
          label={ label }
          name={ name }
          key={ value }
          isSelected = { this.isSelected(value) }
        />
      );
    })
  }

  render() {
    return (
      <View
        style= {
          {
            flex: this.props.values.length,
            flexDirection: 'row'
          }
        }
      >
        { this.renderBoxes() }
      </View>
    );
  }
}

export default Toggle;
