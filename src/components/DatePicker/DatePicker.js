// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ifss, cmss } from '../../styles/styles';
import moment from 'moment';

class Datepicker extends Component {
  selectedValue() {
    const { values } = this.props.datapoint;
    const { selectedValue } = this.props;
    if(selectedValue) {
      return selectedValue;
    }
    return moment().format('X');
  }

  render(){
    const { label, name, control } = this.props.datapoint;
    const { selectedValue } = this.props;
    const selectedTime = moment.unix(this.selectedValue()).format('HH:mm')
    return (
      <TouchableHighlight
        style={[selectedValue ? ifss.containerBoxSelected : ifss.containerBox, cmss.borderRight]}
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.datePicker.onPressDate(); }}
      >
        <View style={[ ifss.containerTextSelected, {marginTop: 40}]}>
          <Text style={ ifss.labelVisible }>
            { label }
          </Text>
          <Text style={selectedValue ? ifss.textSelected : ifss.text }>
            { selectedTime }
          </Text>
          <DatePicker
            ref={'datePicker'}
            date={ this.selectedValue() }
            format='X'
            is24Hour={ true }
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
