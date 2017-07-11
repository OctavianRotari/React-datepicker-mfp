// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePickerModal from '../DatePickerModal';
import { ifss, cmss } from '../../styles/styles';
import TimeFormat from '../../constants/TimeFormat';
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

  isToday() {
    const timestamp = this.selectedValue();
    const t = moment.unix(timestamp);
    const ct = moment();
    const diffDays = ct.diff(t, 'days');
    let format = TimeFormat.hours
    if(diffDays > 0) {
      format = TimeFormat.days;
    }
    const selectedTime = moment.unix(timestamp).format(format)
    return selectedTime;
  }

  render(){
    const { label, name, control, format } = this.props.datapoint;
    const { selectedValue } = this.props;
    const selectedTime = this.isToday();
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
          <DatePickerModal
            ref={'datePicker'}
            date={ this.selectedValue() }
            inputFormat='X'
            format={ format }
            hideText={ true }
            maxDate={ name === 'time-of-injury' ? moment().format('X') : null}
            minDate={ name === 'eta' ? moment().format('X') : null}
            mode={ name === 'eta' ? 'time' : 'datetime'}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={ false }
            onDateChange={
              (date) => {
                const unixDate = moment(date).format('X');
                this.props.onSelect({name, control, value: unixDate})
              }
            }
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default Datepicker;
