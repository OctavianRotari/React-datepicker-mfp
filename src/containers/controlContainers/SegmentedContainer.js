// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { selectValue, discardValue } from '../../actions/selectValue';
import InputBox from '../../components/InputBox';

class SegmentedContainer extends Component {
  renderInputBox() {
    const { ...other } = this.props.datapoint
    const { control, values } = this.props.datapoint;
    let key = 0;
    return _.map(values, value => {
      key += 1;
      return (
        <InputBox
          key={ key }
          { ...other }
          value={ value }
        />
      );
    });
  }

  render() {
    const { values } = this.props.datapoint;
    const numberOfCubes = values.length ? values.length : 1;
    return(
      <View
        style={ { flex: numberOfCubes, flexDirection: 'row' } } >
        { this.renderInputBox() }
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (props) => {
      dispatch(selectValue(props));
    },
    onDiscard: (props) => {
      dispatch(discardValue(props));
    }
  };
}

function mapStateToProps(state, ownProps) {
  const { name, value, control } = ownProps;
  if(control === "Segmented") {
    const selectedValues = InputTypes[control].selectedValues(name, state.events);
    console.log(selectedValues);
  }

  return {
    selected: false,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SegmentedContainer);
