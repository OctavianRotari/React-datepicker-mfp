// @flow
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import Box from '../components/Row/RowComponents/Box'

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (name, value, parentType) => {
      dispatch(selectValue(name, value, parentType));
    },
    onDiscard: (name, value, parentType) => {
      dispatch(discardValue(name, value, parentType));
    }
  };
}

const boxContainer = connect(null, mapDispatchToProps)(Box);

export default boxContainer;
