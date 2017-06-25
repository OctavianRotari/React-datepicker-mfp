import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  lableRow: {
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },
  textRot: {
    transform: [{ rotate: '-90deg' }],
    textAlign: 'center',
    maxHeight: 15,
    fontSize: 9,
  },
  textNorm: {
    textAlign: 'left',
    backgroundColor: 'transparent',
    fontSize: 9,
    maxWidth: 9,
  }
});
