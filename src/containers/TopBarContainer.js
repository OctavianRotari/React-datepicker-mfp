import { connect } from 'react-redux';
import TopBar from '../components/TopBar';

function mapStateToProps(state) {
  return {
    topBar: state.appData.topBar,
    components: state.viewState.components,
  }
}

const TopBarContainer = connect(mapStateToProps)(TopBar);

export default TopBarContainer;
