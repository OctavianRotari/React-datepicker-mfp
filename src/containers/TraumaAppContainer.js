// @flow
import { connect } from 'react-redux';
import TraumaApp from '../components/TraumaApp';
import { getAppData } from '../actions/getAppData';

function mapDispatchToProps(dispatch) {
  return {
    onLoaded: () => {
      dispatch(getAppData())
    }
  };
}

function mapStateToProps(state) {
  return {
    appData: state.appData,
    activeForm: state.activeForm
  }
}

const TraumaAppContainer = connect(mapStateToProps, mapDispatchToProps)(TraumaApp);

export default TraumaAppContainer;
