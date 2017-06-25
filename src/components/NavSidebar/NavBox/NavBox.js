import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { View, Text } from 'react-native';
import styles from './styles';

class NavBox extends Component {
  render() {
    const { value, name } = this.props;
    return(
      <TouchableHighlight
        style={{minHeight: 30}}
        onPress={() => { 
          this.props.onSelectForm(value) 
        }}
        underlayColor="#048fc0"
        activeOpacity={ 0.9 }
      >
        <View style={ styles.containerText }>
          <Text style={ styles.text }>{ name }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default NavBox;
