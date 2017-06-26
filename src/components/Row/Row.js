// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import InputType from '../InputType';
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
        <InputType
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
    return (
      <View style={ css.flexOneRow } >
        <View style={[ {flex: 1, flexDirection: 'row'}, styles.lableRow] }>
          <Text style={[ this.rotateLable(label), { minWidth: this.state.height } ]}>{ label }</Text>
        </View>
        <View style={{ flex: 30, flexDirection:'row'}} onLayout={ (event) => this.measureView(event.nativeEvent.layout.height) }>
          { this.buildRow() }
        </View>
      </View>
    );
  }
}

export default Row;
