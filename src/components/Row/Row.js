// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import RowComponent from './RowComponents';
import css from '../../config/commonStyles';
import styles from './styles';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  buildRow() {
    return _.map(this.props.rowDatapoints, ( datapoint ) => {
      return(
        <RowComponent
          key={ datapoint.label }
          datapoint={ datapoint }
        />
      )
    })
  }

  measureView(height) {
    this.setState({ height: height });
  }

  rotateLable(label) {
    if(label.length === 1) {
      return styles.textNorm;
    }
    return styles.textRot;
  }

  render() {
    const { label } = this.props;
    const lableRot = this.rotateLable(label);
    return (
      <View
        style={[ css.flexOneRow, styles.borderBottom ]}
        onLayout={ (event) => this.measureView(event.nativeEvent.layout.height) }
      >
        <View  style={ styles.lableCont }>
      <Text style={
        [
          { minWidth: this.state.height }, 
          lableRot
        ]
      }>{ label }</Text>
      </View>
      { this.buildRow() }
      </View>
      );
  }
}

export default Row;
