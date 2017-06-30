import { connect } from 'react-redux';
import NavSidebar from '../components/NavSidebar';
import { setActiveForm } from '../actions/setActiveForm';

function mapDispatchToProps(dispatch) {
  return {
    onLoaded: (activeForm, forms) => {
      dispatch(setActiveForm(activeForm, forms));
    }
  }
}

function mapStateToProps(state) {
  return {
    activeFormName: state.appData.activeForm,
    activeForm: state.activeForm,
    forms: state.appData.forms,
  }
}

const NavSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(NavSidebar);

export default NavSidebarContainer;
