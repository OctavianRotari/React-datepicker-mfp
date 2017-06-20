import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputTypesContainer from '../../../../containers/InputTypesContainer'
import styles from './styles';

class Numeral extends Component {
  isSelected(name) {
    const { selectedValue } = this.props;
    if( selectedValue ) {
      return true;
    }
    return false;
  }

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
          values={ values } 
          selectedValue = { this.props.selectedValue }
          label={ label }
          name={ name }
          isSelected = { this.isSelected(name) }
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
