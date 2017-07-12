// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, { View, Text } from 'react-native';

class PopoverTouchable extends Component {
  constructor(props) {
    super(props);
    this.touchable = null;
    this.state = {
      showPopover: false,
      popoverAnchor: { x: 0, y: 0, width: 0, height: 0 }, 
    };
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
    // if (children.length !== 2 ||
    //     children[1] instanceof Number ||
    //     children[1] instanceof String ||
    //     children[1].type.displayName !== 'Popover') {
    //     throw new Error('Popover touchable must have two children and the second one must be Popover');
    //   }
    return (
      <View>
        <Text>PopoverTouchable</Text>
      </View>
    )
  }
}

PopoverTouchable.propTypes = {
  onPopoverDisplayed: PropTypes.func,
};

export default PopoverTouchable;

// {React.cloneElement(children[0], {
//     ref: this.setRef,
//     onPress: this.onPress,
// })}
// {React.cloneElement(children[1], {
//     visible: children[1].props.visible,
//     onClose: this.onClosePopover,
//     fromRect: this.state.popoverAnchor,
// })}
