import { connect } from 'react-redux';
import _ from 'lodash';
import TextBox from '../components/TopBar/TextBox';

function mapStateToProps(state) {
  return {
    components: state.viewState.components,
  }
}

const TextBoxContainer = connect(mapStateToProps)(TextBox);

export default TextBoxContainer;
