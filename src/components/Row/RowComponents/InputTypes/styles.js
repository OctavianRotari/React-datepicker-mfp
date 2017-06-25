import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerBox: {
    flex: 1,
    flexDirection: 'row',
  },
  containerText: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  labelVisible: {
    flex: 1,
    textAlign: 'center',
    color:'white',
    alignItems:'flex-end',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 12,
    maxHeight: 18,
  },
  containerTextSelected: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color:'white',
    justifyContent:'center',
    fontFamily: 'HelveticaNeue-Medium',
    maxHeight: 18,
  },
  textSelected: {
    flex: 1,
    textAlign: 'center',
    color:'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16,
    maxHeight: 20,
  },
  containerBoxSelected: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#5e5e5f',
    backgroundColor: "#048fc0",
  }
})
