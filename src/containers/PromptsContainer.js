import { connect } from 'react-redux';
import { markDone } from '../actions/prompt';
import Prompts from '../components/Prompts';

function mapDispatchToProps(dispatch) {
  return {
    done: (props) => {
      dispatch(markDone(props))
    }
  }
}

function mapStateToProps(state) {
  return {
    activePrompts: state.activePrompts
  }
}

const PromptsContainer = connect(mapStateToProps, mapDispatchToProps)(Prompts);

export default PromptsContainer;
