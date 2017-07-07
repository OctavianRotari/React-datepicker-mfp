// @flow
import { connect } from 'react-redux'
import Row from '../components/Row'

function mapStateToProps(state, ownProps) {
  let rowDatapoints = {};
  ownProps.rowComponents.forEach((component) => {
    const { datapoints } = state;
    rowDatapoints[component] = datapoints[component]
  });

  return {
    rowDatapoints: rowDatapoints
  }
}

const rowContainer = connect(mapStateToProps)(Row);

export default rowContainer;
