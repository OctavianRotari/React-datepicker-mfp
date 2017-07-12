// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactNative, { 
  StyleSheet, 
  Dimensions, 
  Modal,
  View,
  TouchableWithoutFeedback,
  Animated,
  Platform
} from 'react-native';
import _ from 'lodash';
import { computeGeometry } from './PopoverGeometry';

const _a = Dimensions.get('window');
const SCREEN_HEIGHT = _a.height;
const SCREEN_WIDTH = _a.width;
const ARROW_ROTATION = {
  bottom: 2,
  left: -1,
  right: 1,
  top: 0.0,
  auto: 0.0,
};

class Popover extends Component {
  constructor(props) {
    super(props);
    this.updateState = _.debounce(this.setState, 100);
    this.state = {
      contentSize: { width: 0, height: 0 },
      anchor: { x: 0, y: 0 },
      origin: { x: 0, y: 0 },
      placement: 'auto',
      visible: props.visible,
      isAwaitingShow: false,
      animations: {
        scale: new ReactNative.Animated.Value(0),
        translate: new ReactNative.Animated.ValueXY({ x: 0, y: 0 }),
        fade: new ReactNative.Animated.Value(0),
        rotate: new ReactNative.Animated.Value(0),
      },
      onClose: this.props.onClosePopover,
      displayArea: { x: 10, y: 10, width: SCREEN_WIDTH - 20, height: SCREEN_HEIGHT - 20 },
      arrowSize: { width: 16, height: 8 },
    };
    this.computeStyles = this.computeStyles.bind(this);
    this.measureContent = this.measureContent.bind(this);
    this.getTranslateOrigin = this.getTranslateOrigin.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const willBeVisible = nextProps.visible || this.props.visible;
    const _a = this.props; 
    const visible = _a.visible; 
    const fromRect = _a.fromRect; 
    const displayArea = _a.displayArea;
    if (willBeVisible !== visible) {
        if (willBeVisible) {
            this.setState({ contentSize: { width: 0, height: 0 }, isAwaitingShow: true, visible: true });
        }
        else {
            this.startAnimation(false);
        }
    }
    else if (willBeVisible && (fromRect !== nextProps.fromRect || displayArea !== nextProps.displayArea)) {
        const { contentSize } = this.state;
        const geom = computeGeometry(contentSize, nextProps.placement, nextProps.fromRect, nextProps.displayArea, nextProps.arrowSize);
        const { isAwaitingShow } = this.state;
        this.setState(_.assign({}, geom, { contentSize: contentSize }), function () {
            if (isAwaitingShow) {
                _this.startAnimation(true);
            }
        });
    }
  }

  measureContent() {
    const width = _a.width;
    const height = _a.height;
    if(width && height) {
      const contentSize = { width, height };
      const geom = computeGeometry(contentSize, this.props.placement, this.props.fromRect, this.state.displayArea, this.state.arrowSize);
      const { isAwaitingShow } = this.state;
      this.updateState((_.assign({}, geom, { contentSize: contentSize })), function () {
        if (isAwaitingShow) {
          this.startAnimation(true);
        }
      });
    }
  }

  getTranslateOrigin() {
    const _a = this.state;
    const contentSize = _a.contentSize;
    const origin = _a.origin;
    const anchor = _a.anchor;
    var popoverCenter = { x: origin.x + contentSize.width / 2, y: origin.y + contentSize.height / 2 };
    return { x: anchor.x - popoverCenter.x, y: anchor.y - popoverCenter.y };
  }

  startAnimation(show) {
    const values = this.state.animations;
    const translateOrigin = this.getTranslateOrigin();
    if (show) {
        values.translate.setValue(translateOrigin);
        values.rotate.setValue(ARROW_ROTATION[this.state.placement]);
    }
    const commonConfig = {
        duration: 300,
        easing: show ? ReactNative.Easing.out(ReactNative.Easing.back(1.70158)) : ReactNative.Easing.inOut(ReactNative.Easing.quad),
        useNativeDriver: true,
    };
    const doneCallback = show ? undefined : function () { return this.setState({ visible: false }); };
    ReactNative.Animated.parallel([
        ReactNative.Animated.timing(values.rotate, {
            toValue: ARROW_ROTATION[this.state.placement],
            duration: 0,
            useNativeDriver: true,
        }),
        ReactNative.Animated.timing(values.fade, _.assign({ toValue: show ? 1 : 0 }, commonConfig)),
        ReactNative.Animated.timing(values.translate, _.assign({ toValue: show ? { x: 0, y: 0 } : translateOrigin }, commonConfig)),
        ReactNative.Animated.timing(values.scale, _.assign({ toValue: show ? 1 : 0 }, commonConfig)),
    ]).start(doneCallback);
  }

  computeStyles() {
    const _a = this.state; 
    const animations = _a.animations; 
    const anchor = _a.anchor; 
    const origin = _a.origin;
    const arrowSize = this.state.arrowSize;
    const width = arrowSize.width + 2;
    const height = arrowSize.height * 2 + 2;
    return {
        background: [
            styles.background,
            this.props.backgroundStyle,
            {
                opacity: animations.fade.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                }),
            },
        ],
        arrow: [
            styles.arrow,
            this.props.arrowStyle,
            {
                width: width,
                height: height,
                borderTopWidth: height / 2,
                left: anchor.x - origin.x - width / 2,
                top: anchor.y - origin.y - height / 2,
                borderRightWidth: width / 2,
                borderBottomWidth: height / 2,
                borderLeftWidth: width / 2,
                transform: [
                    {
                        rotate: animations.rotate.interpolate({
                            inputRange: [-2, 2],
                            outputRange: ['-180deg', '180deg'],
                            extrapolate: 'clamp',
                        }),
                    },
                    {
                        scale: animations.scale.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                            extrapolate: 'clamp',
                        }),
                    },
                ],
            },
        ],
        popover: [
            styles.popover,
            this.props.popoverStyle,
            { top: origin.y, left: origin.x },
        ],
        content: [
            styles.content,
            this.props.contentStyle,
            {
                transform: [
                    { translateX: animations.translate.x },
                    { translateY: animations.translate.y },
                    { scale: animations.scale },
                ],
            },
        ],
    };
  }

  render() {
    var origin = this.state.origin;
    var computedStyles = this.computeStyles();
    var contentSizeAvailable = this.state.contentSize.width;
    return (
      <Modal 
        transparent 
        visible={this.state.visible} 
        onRequestClose={this.props.onClose}>
        <View style={[styles.container, contentSizeAvailable && styles.containerVisible]}>
            <TouchableWithoutFeedback onPress={this.props.onClose}>
                <Animated.View style={computedStyles.background}/>
            </TouchableWithoutFeedback>
            <Animated.View style={computedStyles.popover}>
                <Animated.View onLayout={this.measureContent} style={computedStyles.content}>
                    {this.props.children}
                </Animated.View>
                <Animated.View style={computedStyles.arrow}/>
            </Animated.View>
        </View>
      </Modal>
      );
  }
}

const styles = StyleSheet.create({
  container: _.assign(
    StyleSheet.absoluteFillObject,
    {
      opacity: 0,
      backgroundColor: 'transparent',
    }
  ),
  containerVisible: {
    opacity: 1,
  },
  backgroundColor: _.assign(
    StyleSheet.absoluteFillObject,
    {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  ),
  popover: _.assign(
    Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        backgroundColor: 'transparent',
      }
    }),
    { position: 'absolute' }
  ),
  content: {
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  arrow: {
    position: 'absolute',
    borderTopColor: '#f2f2f2',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
})

Popover.propTypes = {
    visible: PropTypes.bool,
        onClose: PropTypes.func,
        arrowSize: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
        }),
        placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom', 'auto']),
        fromRect: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
            width: PropTypes.number,
            height: PropTypes.number,
        }),
        displayArea: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
            width: PropTypes.number,
            height: PropTypes.number,
        }),
        backgroundStyle: PropTypes.any,
        arrowStyle: PropTypes.any,
        popoverStyle: PropTypes.any,
        contentStyle: PropTypes.any,
};

Popover.defaultProps = {
};

export default Popover;
