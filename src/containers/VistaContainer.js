// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';

function mapStateToProps(state, ownProps) {
  const { name } = ownProps;
  return {
    forms: state.appData.forms[name]
  };
}
const vistaContainer = connect(mapStateToProps)(Vista);

export default vistaContainer;
