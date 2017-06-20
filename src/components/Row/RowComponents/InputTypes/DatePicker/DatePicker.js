// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import moment from 'moment';

class Datepicker extends Component {

  render(){
    const { isSelected, label, name } = this.props;
    const style = this.isSelectedStyle();
    return (
      <TouchableHighlight
        style={ styles.containerBox }
        underlayColor="#048fc0"
        activeOpacity={0.9}
      >
        <View style={ styles.containerText }>
          <Text style={ styles.label }>
            { label }
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Datepicker;
