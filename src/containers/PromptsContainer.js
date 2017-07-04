import { connect } from 'react-redux';
import Prompts from '../components/Prompts';

function mapStateToProps(state) {
  return {
    activePrompts: state.activePrompts
  }
}

const PromptsContainer = connect(mapStateToProps)(Prompts);

export default PromptsContainer;
