import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export default StyleSheet.create({
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
    borderRightWidth: 0.5
  },
  alerts: {
    borderLeftWidth: 1,
    flex:4,
  },
});
