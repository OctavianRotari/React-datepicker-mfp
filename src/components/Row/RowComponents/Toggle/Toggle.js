import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypesContainer from '../../../../containers/InputTypesContainer'
import styles from './styles';

class Toggle extends Component {
  renderBoxes() {
    const { label, name, selectedValue } = this.props;
    return _.map(this.props.values, value => {
      return (
        <InputTypesContainer
          childType={ 'Box' }
          parentType={ 'Toggle' }
          value={ value }
          label={ label }
          name={ name }
          key={ value }
          isSelected = { selectedValue === value ? true : false }
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
