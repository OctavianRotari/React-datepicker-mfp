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
    padding: 3
  },
  textSelected: {
    textAlign: 'center',
    color: colors.prCol,
    fontFamily: fontFamily.bold,
    padding: 3
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
