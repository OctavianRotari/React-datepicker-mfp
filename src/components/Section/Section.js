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
    const { children } = this.props.rows;
    return _.map(children, child => {
      const { label } = child;
      return(
        <RowContainer
          key= { label }
          rowComponents={ child }
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
