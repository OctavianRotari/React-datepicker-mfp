// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { buildComposer } from '../../composers';
import { selectValue, discardValue } from '../../actions/selectValue';
import InputBox from '../../components/InputBox';

class SegmentedContainer extends Component {
  renderInputBox() {
    const { label, values, control, name } = this.props.datapoint;
    const { selectedValue } = this.props;
    let key = 0;
    return _.map(values, value => {
      key += 1;
      return (
        <InputBox
          key={ key }
          value={ value }
          control={ control }
          label={ label }
          name={ name }
          selected={ _.includes(selectedValue, value) }
          onSelect={ this.props.onSelect }
          onDiscard={ this.props.onDiscard }
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
  const { name, control } = ownProps.datapoint;
  const { events } = state;
  const Composer = buildComposer(control, events, name);
  const selectedValue = Composer.selectedValues();

  return {
    selectedValue,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SegmentedContainer);
