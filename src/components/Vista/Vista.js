import React, { Component } from 'react';
import _ from 'lodash';
import { View, ActivityIndicator } from 'react-native';
import Section from '../Section';
import styles from './styles';

class Vista extends Component {
  componentDidMount() {
    this.props.onLoaded(this.props.datapoints);
  }

  renderSections() {
    const { children } = this.props.forms;
    return _.map(children, child => {
      const { name } = child;
      return(
        <Section key={ name } rows={ child.children }/>
      )
    })
  }

  render() {
    const { inProgress, components } = this.props.viewState;
    if(!components || inProgress){
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
