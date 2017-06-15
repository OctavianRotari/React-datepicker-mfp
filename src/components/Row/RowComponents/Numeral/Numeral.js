import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View, Text } from 'react-native';
import BoxContainer from '../../../../containers/BoxContainer'
import styles from './styles';

class Numeral extends Component {
  render() {
    const { label, name } = this.props;
    const { selected } = this.props.values;
    return (
      <View
        style={
          {
            flex: 1,
            flexDirection: 'row'
          }
        }
      >
        <BoxContainer 
          value={ selected } 
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
