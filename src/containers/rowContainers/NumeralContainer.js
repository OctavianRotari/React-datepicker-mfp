// @flow

import { connect } from 'react-redux';
import Numeral from '../../components/Row/RowComponents/Numeral';

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

const NumeralContainer = connect(mapStateToProps)(Numeral);

export default NumeralContainer;
