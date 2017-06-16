import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypesContainer from '../../../../containers/rowContainers/InputTypesContainer'
import styles from './styles';

class Numeral extends Component {
  render() {
    const { label, name, values } = this.props;
    return (
      <View
        style={
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        <InputTypesContainer 
          childType={ 'NumberPicker' }
          isSelected = { true }
          values={ values } 
          label={ label }
          name={ name }
        />
      </View>
    );
  }
}

Numeral.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string
}

export default Numeral;
