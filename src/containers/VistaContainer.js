// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';
import { createViewState } from '../actions/createViewState';

function mapStateToProps(state) {
  const { active } = state.activeForm
  return {
    forms: state.appData.forms[active],
    datapoints: state.appData.datapoints,
    viewState: state.viewState
  };
}

const StandbyContainer = connect(mapStateToProps)(Vista);

export default StandbyContainer;
