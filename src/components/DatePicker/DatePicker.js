// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ifss } from '../../styles/styles';
import moment from 'moment';

class Datepicker extends Component {
  selectedValue() {
    const { selectedValue, values } = this.props;
    if(selectedValue) {
      return selectedValue;
    }
    return moment().format('X');
  }

  render(){
    const { selectedValue, label, name, control } = this.props;
    const selectedTime = moment.unix(this.selectedValue()).format('hh:mm a')
    return (
      <TouchableHighlight
        style={ selectedValue ? ifss.containerBoxSelected : ifss.containerBox }
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.datePicker.onPressDate(); }}
      >
        <View style={  ifss.containerTextSelected }>
          <Text style={ ifss.labelVisible }>
            { label }
          </Text>
          <Text style={ selectedValue ? ifss.textSelected : ifss.text }>
            { selectedTime }
          </Text>
          <DatePicker
            ref={'datePicker'}
            date={ this.selectedValue() }
            format='X'
            hideText={ true }
            maxDate={ name === 'time-of-injury' ? moment().format('X') : null}
            minDate={ name === 'eta' ? moment().format('X') : null}
            mode={ name === 'eta' ? 'time' : 'datetime'}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={ false }
            onDateChange={
              (date) => {
                this.props.onSelect({name, control, value: date})
              }
            }
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default Datepicker;
