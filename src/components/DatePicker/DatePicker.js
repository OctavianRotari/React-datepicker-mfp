// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { IFS } from '../../styles/styles';
import moment from 'moment';

class Datepicker extends Component {
  selectedValue() {
    const { selectedValue, values } = this.props;
    if(selectedValue) {
      return selectedValue;
    }
    return moment().format('Do, h:mm a');
  }

  render(){
    const { selected, label, name } = this.props;
    return (
      <TouchableHighlight
        style={ selected ? IFS.containerBoxSelected : IFS.containerBox }
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.datePicker.onPressDate(); }}
      >
        <View style={  IFS.containerTextSelected }>
          <Text style={ IFS.labelVisible }>
            { label }
          </Text>
          <Text style={ selected ? IFS.textSelected : IFS.text }>
            { this.selectedValue() }
          </Text>
          <DatePicker
            ref={'datePicker'}
            hideText={true}
            mode="datetime"
            format="Do, h:mm a"
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