import { connect } from 'react-redux';
import _ from 'lodash';
import NavBox from '../components/NavBox';
import { setActiveForm } from '../actions/setActiveForm';

function mapDispatchToProps(dispatch) {
  return {
    onTap: (formName, forms) => {
      dispatch(setActiveForm(formName, forms));
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { value } = state.activeForm;
  let isSelected = false;
  if(ownProps.value === value) {
    isSelected = true;
  }
  return {
    selected: isSelected,
    forms: state.forms
  }
}

const TextBoxContainer = connect(mapStateToProps, mapDispatchToProps)(NavBox);

export default TextBoxContainer;
