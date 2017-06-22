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

function mapDispatchToProps(dispatch) {
  return {
    onLoaded: (datapoints) => {
      dispatch(createViewState(datapoints))
    }
  }
}

const StandbyContainer = connect(mapStateToProps, mapDispatchToProps)(Vista);

export default StandbyContainer;
