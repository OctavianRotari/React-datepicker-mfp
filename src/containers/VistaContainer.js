// @flow
import { connect } from 'react-redux';
import Vista from '../components/Vista';
import { getForm } from '../actions/getForm'

function mapStateToProps(state) {
  return {
    forms: state.forms
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetForm: (name) => dispatch(getForm(name))
  };
}

const vistaContainer = connect(mapStateToProps, mapDispatchToProps)(Vista);

export default vistaContainer;
