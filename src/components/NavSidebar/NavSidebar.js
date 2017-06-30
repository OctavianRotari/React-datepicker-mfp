import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ActivityIndicator } from 'react-native';
import NavBoxContainer from '../../containers/NavBoxContainer';
import colors from '../../config/colors';
import { navss, tass } from '../../styles/styles';

class NavSidebar extends Component {
  componentDidMount() {
    const { activeFormName, forms } = this.props;
    this.props.onLoaded(activeFormName, forms);
  }

  buildNavBox() {
    const { forms } = this.props;
    let id = 0;
    return _.map(forms, (form) => {
      id += 1;
      return (
        <NavBoxContainer
          key={id}
          value={ form.value }
          name={ form.name }
        />
      );
    })
  }

  render() {
    const { value } = this.props.activeForm;
    if(!value){
      return(
        <View style={{flex:1}}>
          <ActivityIndicator
            style={ tass.actInd }
            color={ colors.secCol }
            size="large"
          />
        </View>
      )
    }
    return (
      <View style={ navss.navSidebarContainer } >
        { this.buildNavBox() }
      </View>
    )
  }
}

export default NavSidebar;
