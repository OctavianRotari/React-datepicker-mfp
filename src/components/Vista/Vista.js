import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator } from 'react-native';
import Section from '../Section';
import styles from './styles';

class Vista extends Component {
  componentDidMount() {
    const { name } = this.props;
    this.props.onGetForm(name);
  }

  renderSections() {
    const { sections } = this.props.forms;
    return _.map(sections, section => {
      const { name } = section;
      return(
        <Section key={ name } rows={ section }/>
      )
    })
  }

  render() {
    const { inProgress } = this.props.forms
    if(inProgress){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flexDirection: 'column'}}>
        { this.renderSections() }
      </View>
    );
  }
}

export default Vista;
