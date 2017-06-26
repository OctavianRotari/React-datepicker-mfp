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

const TextBoxContainer = connect(null, mapDispatchToProps)(NavBox);

export default TextBoxContainer;
