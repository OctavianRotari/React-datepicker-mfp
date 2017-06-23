// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';
import { createViewState } from '../actions/createViewState';

function mapStateToProps(state) {
  return {
    forms: state.appData.forms['standby'],
    datapoints: state.appData.datapoints,
    viewState: state.viewState
  };
}

const StandbyContainer = connect(mapStateToProps)(Vista);

export default StandbyContainer;
