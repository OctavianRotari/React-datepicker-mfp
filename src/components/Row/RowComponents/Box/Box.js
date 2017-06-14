import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
const { width, height } = Dimensions.get('window');

const Box = (props) => {
  return (
    <Text>
      { props.value }
    </Text>
  );
};

export default Box;
