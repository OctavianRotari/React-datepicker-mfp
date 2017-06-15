// @flow

import { connect } from 'react-redux';
import Segmented from '../../components/Row/RowComponents/Segmented';

function mapStateToProps(state, ownProps) {
  const { name } = ownProps;
  const selected = state.selectedValues[name]
  if(selected) {
    return {
      selectedValues: selected
    }
  }
  return {}
}

const SegmentedContainer = connect(mapStateToProps)(Segmented);

export default SegmentedContainer;
