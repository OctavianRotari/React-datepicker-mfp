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
        <Section 
          key={ name } 
          rows={ child.children }
        />
      )
    })
  }

  render() {
    const { inProgress, components } = this.props.viewState;
    if(!components || inProgress){
      return(
        <View>
          <ActivityIndicator
            style={
              {
                alignItems: 'center',
                justifyContent: 'center',
                height: 80, 
              }
            }
            size="large"
            color="#123456" 
          />
        </View>
      )
    }
    return (
      <View style={{flex:1}}>
        { this.renderSections() }
      </View>
    );
  }
}

export default Vista;
