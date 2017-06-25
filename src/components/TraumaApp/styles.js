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
  },
  alerts: {
    flex:4,
    borderLeftWidth: 1,
    borderColor: 'rgba(225, 225, 225, 0.50)'
  },
});
