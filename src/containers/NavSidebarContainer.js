import { connect } from 'react-redux';
import NavSidebar from '../components/NavSidebar';

function mapStateToProps(state) {
  return {
    forms: state.appData.forms,
  }
}

const NavSidebarContainer = connect(mapStateToProps)(NavSidebar);

export default NavSidebarContainer;
