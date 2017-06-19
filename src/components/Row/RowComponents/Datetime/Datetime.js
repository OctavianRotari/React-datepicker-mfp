import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import styles from './styles';
import InputTypesContainer from '../../../../containers/rowContainers/InputTypesContainer'

class Datetime extends Component {
  isSelected(name) {
    const { selectedValue } = this.props;
    if( selectedValue ) {
      return true;
    }
    return false;
  }

  render() {
    const { name, label } = this.props;
    return (
      <View
        style= {
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        <InputTypesContainer
          childType={ 'DatePicker' }
          selectedValue = { this.props.selectedValue }
          label={ label }
          name={ name }
          isSelected={ this.isSelected(name) }
        />
      </View>
    );
  }
}

export default Datetime;
