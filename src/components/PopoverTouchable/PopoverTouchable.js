// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, { View, Button } from 'react-native';
import Popover from '../Popover';

class PopoverTouchable extends Component {
  constructor(props) {
    super(props);
    this.touchable = null;
    this.state = {
      showPopover: false,
      popoverAnchor: { x: 0, y: 0, width: 0, height: 0 }, 
    };
    this.setRef = this.setRef.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onTouchableMeasured = this.onTouchableMeasured.bind(this);
    this.onClosePopover = this.onClosePopover.bind(this);
  }

  setRef(ref) {
    this.touchable = ref;
  }

  onPress() {
    const handle = ReactNative.findNodeHandle(this.touchable);
    if(handle) {
      ReactNative.NativeModules.UIManager.measure(handle, this.onTouchableMeasured);
    }
  }

  onTouchableMeasured(_x, _y, width, height, x, y) {
    this.setState({
      showPopover: true,
      popoverAnchor: { x: x, y: y, width: width, height: height },
    }, () => {
      if(this.props.onPopoverDisplayed) {
        this.props.onPopoverDisplayed();
      }
    });
  }

  onClosePopover() {
    return this.setState({
      showPopover: false
    });
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    return (
      <View>
        {React.cloneElement(children[0], {
          ref: this.setRef,
          onPress: this.onPress,
        })}
        {React.cloneElement(children[1], {
          visible: this.state.showPopover,
          onClose: this.onClosePopover,
          fromRect: this.state.popoverAnchor,
        })}
      </View>
    )
  }
}

PopoverTouchable.propTypes = {
  onPopoverDisplayed: PropTypes.func,
};

export default PopoverTouchable;
