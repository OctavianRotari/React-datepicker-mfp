// @flow
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import Row from '../components/Row';
import { connect } from 'react-redux';
import { getDatapoints } from '../actions/getDatapoints';

class RowContainer extends Component {
  componentDidMount(){
    this.props.getDatapoints()
  }

  buildRow() {
    const datapoints = this.props.datapoints;
    const rowComponents = this.props.rowComponents;
    _.map(rowComponents, component => {
      let index = rowComponents.indexOf(component);
      if (index !== -1) {
        rowComponents[index] =  datapoints[component];
      }
    })
    return <Row rowComponents={ rowComponents }/>;
  }

  render() {
    let datapoints = this.props.datapoints;
    if(_.isEmpty(datapoints)) {
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View>
        { this.buildRow() }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    datapoints: state.datapoints
  }
}

export default connect(mapStateToProps, {getDatapoints})(RowContainer);
