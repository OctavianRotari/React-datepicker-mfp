import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import BoxContainer from '../../../../containers/BoxContainer'
import styles from './styles';

class Toggle extends Component {
  renderBoxes() {
    const { label, name } = this.props;
    return _.map(this.props.values, value => {
      return (
        <BoxContainer
          value={ value }
          label={ label }
          name={ name }
          key={ value }
        />
      );
    })
  }

  render() {
    return (
      <View
        style= {
          {
            flex: this.props.values.length,
            flexDirection: 'row'
          }
        }
      >
        { this.renderBoxes() }
      </View>
    );
  }
}

export default Toggle;
