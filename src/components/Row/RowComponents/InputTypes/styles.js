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
    justifyContent:'center'
  },
  textSelected: {
    flex: 1,
    textAlign: 'center',
    color:'white',
    fontFamily: 'HelveticaNeue-Bold'
  },
  containerBoxSelected: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#5e5e5f',
    backgroundColor: "#048fc0",
  }
})
