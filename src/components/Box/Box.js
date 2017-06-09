import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Box = (props) => {
  return (
    <Text>
      { props.value }
    </Text>
  );
};

export default Box;
