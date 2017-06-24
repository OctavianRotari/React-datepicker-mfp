import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create({
  flexOneCol: {
    flex:1,
    flexDirection:'column'
  },
  flexOneRow: {
    flex:1,
    flexDirection: 'row'
  },
  bgClr: {
    backgroundColor: colors.background
  },
});
