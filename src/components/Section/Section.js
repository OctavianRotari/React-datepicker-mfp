import React, { Component } from 'react';
import _ from 'lodash';
import RowContainer from '../../containers/RowContainer';
import styles from './styles';
import {
  View,
  Text
} from 'react-native';

class Section extends Component {
  renderRow() {
    const { rows } = this.props;
    return _.map(rows, row => {
      const { label, children } = row;
      return(
        <RowContainer
          key={ label }
          rowComponents={ children }
        />
      )
    });
  }

  render() {
    const { rows } = this.props;
    return (
      <View style={{flex: rows.length}}>
        { this.renderRow() }
      </View>
    );
  }
}
export default Section;
