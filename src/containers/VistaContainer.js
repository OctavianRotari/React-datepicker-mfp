// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';

function mapStateToProps(state) {
  return {
    activeForm: state.activeForm,
    datapoints: state.datapoints,
  };
}

const StandbyContainer = connect(mapStateToProps)(Vista);

export default StandbyContainer;
