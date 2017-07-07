import { connect } from 'react-redux';
import TopBar from '../components/TopBar';

function mapStateToProps(state) {
  return {
    topBar: state.topBar,
  }
}

const TopBarContainer = connect(mapStateToProps)(TopBar);

export default TopBarContainer;
