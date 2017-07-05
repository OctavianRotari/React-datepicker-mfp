import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import fontFamily from '../../config/fontFamily'
import { cmss } from '../../styles/styles';

class Prompts extends Component {
  renderPrompts() {
    const { activePrompts, done } = this.props;
    let id = 0;
    return _.map(activePrompts, function(value, key) {
      id += 1;
      return (
        <View
          key={ id }
          style={
            {
              backgroundColor: '#c0392b',
              minHeight: 100,
              borderRadius: 20,
              marginBottom: 10
            }
          }
        >
          <View
            style={
              {
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor: 'transparent'
              }
            }
          >
            <Text style={
              {
                flex:1,
                color: '#fff',
                textAlign: 'center',
                fontFamily: fontFamily.bold,
                fontSize: 17,
                padding: 10
              }
            } >
            { value }
          </Text>
        </View>
        <TouchableHighlight
          onPress={() => { done(key) }}
          activeOpacity={ 1 }
          style={[
          {
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: 'transparent',
            maxHeight: 40,
          }, cmss.borderTop ]}>
          <Text style={
            {
              flex:1,
              color: '#fff',
              textAlign: 'center',
              fontSize: 15
            }
          } >
          Done
        </Text>
      </TouchableHighlight>
    </View>
      )
    });
  }

  render() {
    const { activePrompts } = this.props;
    if(activePrompts.length === 0) {
      return(
        <View style={{flex:1, flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch'}}>
          <Text style={{color: '#fff'}}>No Prompts</Text>
        </View>
      )
    }
    return(
      <View style={{flex:1, alignSelf: 'stretch', flexDirection: 'column'}}>
        { this.renderPrompts(activePrompts) }
      </View>
    )
  }
}

export default Prompts;
