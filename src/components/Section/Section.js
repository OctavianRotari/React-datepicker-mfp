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
    const rows = this.props.rows.children;
    console.log('rows', this.props)
    return _.map(rows, row => {
      const children = row.children;
      return(
        <RowContainer
          key= { row.label }
          label={ row.label }
          rowComponents={ children }
        />
      )
    });
  }

  render() {
    return (
      <View>
        { this.renderRow() }
      </View>
    );
  }
}
export default Section;
