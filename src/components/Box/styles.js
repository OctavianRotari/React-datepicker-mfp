import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  box: {
    height: height / 11
  }
});
