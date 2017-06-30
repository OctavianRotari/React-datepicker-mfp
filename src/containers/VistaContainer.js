// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';
import { createViewState } from '../actions/createViewState';

function mapDispatchToProps(dispatch) {
  return {
    onLoaded: (datapoints) => {
      dispatch(createViewState(datapoints));
    }
  }
}

function mapStateToProps(state) {
  const { active } = state.activeForm
  return {
    activeForm: state.activeForm,
    forms: state.appData.forms[active],
    datapoints: state.appData.datapoints,
    viewState: state.viewState
  };
}

const StandbyContainer = connect(mapStateToProps, mapDispatchToProps)(Vista);

export default StandbyContainer;
