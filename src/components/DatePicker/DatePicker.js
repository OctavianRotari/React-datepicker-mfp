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
      const time = moment.unix(selectedValue).format('hh:mm a')
      return time;
    }
    return moment().format('hh:mm a');
  }

  render(){
    const { selected, label, name } = this.props;
    return (
      <TouchableHighlight
        style={ selected ? ifss.containerBoxSelected : ifss.containerBox }
        underlayColor="#048fc0"
        activeOpacity={0.9}
        onPress={() => { this.refs.datePicker.onPressDate(); }}
      >
        <View style={  ifss.containerTextSelected }>
          <Text style={ ifss.labelVisible }>
            { label }
          </Text>
          <Text style={ selected ? ifss.textSelected : ifss.text }>
            { this.selectedValue() }
          </Text>
          <DatePicker
            ref={'datePicker'}
            hideText={true}
            mode="datetime"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={ false }
            onDateChange={
              (date) => {
                const timestamp = moment(date).format('X');
                this.props.onSelect( name, timestamp )
              }
            }
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default Datepicker;
