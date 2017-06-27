import { connect } from 'react-redux';
import _ from 'lodash';
import NavBox from '../components/NavBox';
import { setActiveForm } from '../actions/setActiveForm';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSelectForm: (formName) => {
      dispatch(setActiveForm(formName));
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { active } = state.activeForm;
  let isSelected = false;
  if(ownProps.value === active) {
    isSelected = true;
  }
  return {
    selected: isSelected
  }
}

const TextBoxContainer = connect(mapStateToProps, mapDispatchToProps)(NavBox);

export default TextBoxContainer;
