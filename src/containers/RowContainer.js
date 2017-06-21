// @flow
import { connect } from 'react-redux'
import Row from '../components/Row'

function mapStateToProps(state) {
  return {
    datapoints: state.appData.datapoints
  }
}

const rowContainer = connect(mapStateToProps)(Row);

export default rowContainer;
