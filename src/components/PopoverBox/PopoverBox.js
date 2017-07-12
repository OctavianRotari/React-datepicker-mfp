// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, TouchableHighlight, Button, StyleSheet, PickerIOS } from 'react-native';
import Popover, { PopoverTouchable, Rect } from 'react-native-modal-popover';
import { popoverStyle, cmss } from '../../styles/styles';
import NumeralContainer from '../../containers/controlContainers/NumeralContainer';
import colors from '../../config/colors';
const PickerItemIOS = PickerIOS.Item;

class PopoverBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false
    }
  }

  setPopoverVisible(visible) {
    this.setState({ popoverVisible: visible })
  }

  render() {
    const { selectedValue } = this.props;
    return (
      <PopoverTouchable
        onPopoverDisplayed={ () => { this.setPopoverVisible(true) }}
      >
        <Button title={ selectedValue } onPress={() => console.log('I don\'t work')}/>
        <Popover
          contentStyle={styles.content}
          arrowStyle={styles.arrow}
          backgroundStyle={styles.background}
          visible={this.state.popoverVisible}
        >
          <View
            style={ popoverStyle.popoverContent}
          >
            <NumeralContainer
              datapoint={ this.props.datapoint }
              selectedOption={ selectedValue }
            />
          </View>
        </Popover>
      </PopoverTouchable>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2ffd2',
  },
  content: {
    padding: 30,
    backgroundColor: 'white',
  },
  arrow: {
    borderTopColor: 'white',
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
});

export default PopoverBox;