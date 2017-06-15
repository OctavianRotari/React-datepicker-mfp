// @flow

import { connect } from 'react-redux';
import Toggle from '../../components/Row/RowComponents/Toggle';

function mapStateToProps(state, ownProps) {
  const { name } = ownProps;
  const selected = state.selectedValues[name]
  if(selected) {
    return {
      selectedValue: selected
    }
  }
  return {}
}

const ToggleContainer = connect(mapStateToProps)(Toggle);

export default ToggleContainer;
