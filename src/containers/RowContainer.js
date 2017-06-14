// @flow
import { connect } from 'react-redux'
import { getDatapoint } from '../actions/getDatapoint'
import Row from '../components/Row'

function mapStateToProps(state) {
  return {
    datapoints: state.datapoints
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetDatapoint: (datapoint) => dispatch(getDatapoint(datapoint))
  };
}

const rowContainer = connect(mapStateToProps, mapDispatchToProps)(Row);

export default rowContainer;
