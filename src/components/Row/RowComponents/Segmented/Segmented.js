import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypesContainer from '../../../../containers/InputTypesContainer'
import styles from './styles';

class Segmented extends Component {
  isSelected(value) {
    const { selectedValue } = this.props;
    return _.includes(selectedValue, value);
  }

  renderBoxes() {
    const { label, name } = this.props;
    return _.map(this.props.values, value => {
      return (
        <InputTypesContainer
          childType={ 'Box' }
          parentType={ 'Segmented' }
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

export default Segmented;
