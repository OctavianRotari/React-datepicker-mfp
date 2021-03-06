// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import ControlContainers from '../../containers/ControlContainers';
import { cmss, rss } from '../../styles/styles';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  buildRow() {
    let key = 0;
    return _.map(this.props.rowDatapoints, ( datapoint ) => {
      key += 1;
      const { control } = datapoint;
      const WrapperContainer = ControlContainers[control];
      return(
        <WrapperContainer
          key={ key }
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
      return rss.textNorm;
    }
    return rss.textRot;
  }

  render() {
    const { label } = this.props;
    return (
      <View style={ cmss.flexOneRow } >
        <View style={[ cmss.flexOneRow, rss.labelRow] }>
          <Text style={[ this.rotateLable(label), { minWidth: this.state.height } ]}>{ label }</Text>
        </View>
        <View
          style={{ flex: 30, flexDirection:'row'}}
          onLayout={
            (event) => {
              this.measureView(event.nativeEvent.layout.height)
            }
          }>
          { this.buildRow() }
        </View>
      </View>
    );
  }
}

export default Row;
