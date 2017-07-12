import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';
import fontFamily from '../config/fontFamily';
const { width } = Dimensions.get('window');

export const root = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secCol
  },
  heading: {
    color: '#ffffff',
    fontSize: 22,
    marginTop: 30,
    marginBottom: 5,
  },
  subheading: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  fingerprint: {
    padding: 20,
    marginVertical: 30,
  },
  errorMessage: {
    color: '#c0392b',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 30,
  },
  popup: {
    width: width * 0.8,
  },
  numericPopup: {
    flex:1,
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'stretch'
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  }
});

export const tass = StyleSheet.create({
  actInd: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    flex: 1
  },
  view: {
    flex:12,
    flexDirection: 'row'
  },
  vista: {
    flex:15
  },
  navSidebar: {
    flex:3,
    maxWidth: 128,
  },
  alerts: {
    flex:4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const navss = StyleSheet.create({
  navSidebarContainer: {
    flex: 1, 
    flexDirection: 'column',
    borderRightWidth: 1,
    borderColor: 'rgba(225, 225, 225, 0.50)'
  }
})

export const vss = StyleSheet.create({
  vistaTitleContainer: {
    flex:1.5,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'rgba(225, 225, 225, 0.50)',
    justifyContent: 'center',
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  vistaTitleText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Bold',
    textAlign: 'left'
  },
  sectionBorder: {
    borderBottomWidth: 3,
    borderColor: 'rgba(225, 225, 225, 0.50)'
  }
})

export const rss = StyleSheet.create({
  labelRow: {
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },
  textRot: {
    transform: [{ rotate: '-90deg' }],
    textAlign: 'center',
    maxHeight: 14,
    fontSize: 8,
  },
  textNorm: {
    textAlign: 'left',
    backgroundColor: 'transparent',
    fontSize: 11,
    maxWidth: 9,
  }
})

export const popoverStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(43, 186, 180)',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1,
  },
  popoverContent: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popoverText: {
    color: '#ccc',
  },
})

export const ifss = StyleSheet.create({
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
    textAlign: 'center',
    color: colors.prCol,
    fontFamily: fontFamily.light,
    fontSize: 12,
  },
  containerTextSelected: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    textAlign: 'center',
    color:'white',
    justifyContent:'center',
    fontFamily: fontFamily.normal,
    margin: 5
  },
  textSelected: {
    textAlign: 'center',
    color: colors.prCol,
    fontFamily: fontFamily.bold,
    margin: 4,
    fontSize: 11
  },
  containerBoxSelected: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.secCol,
  },
  topBarText: {
    fontSize: 17,
  }
});

export const cmss = StyleSheet.create({
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
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: colors.borderCol
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.borderCol
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: colors.borderCol
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: colors.borderCol
  }
});

export const Style = StyleSheet.create({
  dateTouch: {
    width: 142
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {
    width: 32,
    height: 32,
    marginLeft: 5,
    marginRight: 5
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    color: '#333'
  },
  placeholderText: {
    color: '#c9c9c9'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: '#46cf98'
  },
  btnTextCancel: {
    color: '#666'
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  }
});
