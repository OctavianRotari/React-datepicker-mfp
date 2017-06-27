import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import fontFamily from '../config/fontFamily';

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
    flex:14
  },
  navSidebar: {
    flex:2,
  },
  alerts: {
    flex:4,
    borderLeftWidth: 1,
    borderColor: colors.borderCol
  },
});

export const rss = StyleSheet.create({
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
    fontSize: 12,
    maxWidth: 9,
  }
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
  },
  textSelected: {
    textAlign: 'center',
    color: colors.prCol,
    fontFamily: fontFamily.bold,
  },
  containerBoxSelected: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.secCol,
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
  }
});
