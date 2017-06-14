import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 2
  },
  steelBlue: {
    backgroundColor: 'steelblue'
  },
  powderBlue: {
    backgroundColor: 'powderblue' 
  }
});
