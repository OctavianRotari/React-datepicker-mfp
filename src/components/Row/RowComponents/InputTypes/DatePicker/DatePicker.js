// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import moment from 'moment';

class Datepicker extends Component {
  isSelectedStyle() {
    const { isSelected } = this.props;
    if( isSelected ) {
      return styles.containerBoxSelected;
    } else {
      return styles.containerBox;
    }
  }

  selectedValue() {
    const { selectedValue, values } = this.props;
    if(selectedValue) {
      return selectedValue;
    }
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  render(){
    const { isSelected, label, name } = this.props;
    const style = this.isSelectedStyle();
    return (
      <TouchableHighlight
        style={ style }
        underlayColor="#048fc0"
        activeOpacity={0.9}
      >
        <View style={ styles.containerText }>
          <Text style={ styles.label }>
            { label }
          </Text>
          <DatePicker
            style={{flex: 1}}
            date={this.selectedValue()}
            mode="datetime"
            placeholder="select date"
            format="MMMM Do YYYY, h:mm:ss a"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={ false }
            onDateChange={
              (date) => {this.props.onSelect( name, date )}
            }
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default Datepicker;
