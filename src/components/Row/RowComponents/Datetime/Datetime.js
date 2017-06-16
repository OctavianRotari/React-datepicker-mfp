import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import styles from './styles';
import InputTypesContainer from '../../../../containers/rowContainers/InputTypesContainer'

class Datetime extends Component {
  render() {
    const { label, name } = this.props;
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
          label={ label }
          name={ name }
          isSelected={ true }
        />
      </View>
    );
  }
}

export default Datetime;
