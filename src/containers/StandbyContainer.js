// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';

function mapStateToProps(state) {
  return {
    forms: state.appData.forms['standby']
  };
}
const StandbyContainer = connect(mapStateToProps)(Vista);

export default StandbyContainer;
