import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerBox: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#5e5e5f'
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color:'white'
  },
  containerBoxSelected: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#5e5e5f',
    backgroundColor: "#048fc0"
  }
})
