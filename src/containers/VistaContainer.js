// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';

function mapStateToProps(state) {
  const { active } = state.activeForm
  return {
    activeForm: state.activeForm,
    forms: state.appData.forms[active],
    datapoints: state.appData.datapoints,
  };
}

const StandbyContainer = connect(mapStateToProps)(Vista);

export default StandbyContainer;
