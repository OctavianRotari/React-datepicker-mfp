import { connect } from 'react-redux';
import Vista from '../components/Vista';
import { getForm } from '../actions/getForm'

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetForm: () => dispatch(getForm('standby'))
  };
}

const vistaContainer = connect(mapStateToProps, mapDispatchToProps)(Vista);

export default vistaContainer;
