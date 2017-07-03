import React, { Component } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

class Prompts extends Component {
  renderPrompts(activePrompts) {
    let id = 0;
    return _.map(activePrompts, (prompt) => {
      id += 1;
      return (
        <Text 
          key={ id } 
          style={{flex:1, color: '#fff'}}
        >
          { prompt.message }
        </Text>
      )
    })
  }

  render() {
    const { activePrompts } = this.props;
    if(activePrompts.length === 0) {
      return(
        <View style={{flex:1}}>
          <Text>No Prompts</Text>
        </View>
      )
    }
    return(
      <View style={{flex:1}}>
        { this.renderPrompts(activePrompts) }
      </View>
    )
  }
}

export default Prompts;
