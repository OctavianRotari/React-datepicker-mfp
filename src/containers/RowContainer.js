// @flow
import { connect } from 'react-redux'
import Row from '../components/Row'

function mapStateToProps(state, ownProps) {
  let rowDatapoints = {};
  ownProps.rowComponents.forEach((component) => {
    const { datapoints } = state.appData;
    rowDatapoints[component] = datapoints[component] 
  });

  return {
    datapoints: rowDatapoints
  }
}

const rowContainer = connect(mapStateToProps)(Row);

export default rowContainer;
