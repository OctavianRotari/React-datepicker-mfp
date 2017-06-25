import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: 'rgba(225, 225, 225, 0.50)'
  },
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
