// @flow

import { connect } from 'react-redux';
import Numeral from '../../components/Row/RowComponents/Datetime';

function mapStateToProps(state) {
  return {
    numeralValues: state.selectedValues.datetime
  }
}

const NumeralContainer = connect(mapStateToProps)(Numeral);

export default NumeralContainer;
