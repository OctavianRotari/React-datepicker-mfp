// @flow
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

class Datepicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  isSelectedStyle() {
    const { isSelected } = this.props;
    if( isSelected ) {
      return styles.containerBoxSelected;
    } else {
      return styles.containerBox;
    }
  }

  showLabel() {
    const { label, isSelected } = this.props;
    if( isSelected ) {
      return(
        <Text style={ styles.label }>
          { label }
        </Text>
      )
    }
  }

  render(){
    const { isSelected } = this.props;
    const style = this.isSelectedStyle();
    return (
      <TouchableHighlight
        style={ style }
        underlayColor="#048fc0"
        activeOpacity={0.9}
      >
        <View style={ styles.containerText }>
          { this.showLabel() }
          <DatePicker
            style={{flex: 1}}
            date={this.state.date}
            mode="datetime"
            placeholder="select date"
            format="MMMM Do YYYY, h:mm:ss a"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={ false }
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default Datepicker;
