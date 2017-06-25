import React, { Component } from 'react';
import _ from 'lodash';
import RowContainer from '../../containers/RowContainer';
import styles from './styles';
import { View, Text } from 'react-native';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  renderRow() {
    const { rows, label } = this.props;
    return _.map(rows, (row, index) => {
      const { label, children } = row;
      const showBorder = rows.length === index + 1 ? null : styles.borderBottomRow
      return(
        <View
          key={ label }
          style={[ {flex: rows.length},  showBorder ]}
        >
          <RowContainer
            label={ label }
            rowComponents={ children }
            onLayout={ (event) => {
              const {x, y, width, height} = event.nativeEvent.layout;
            }}
          />
        </View>
      )
    });
  }

  measureView(height) {
    this.setState({ height: height });
  }

  render() {
    const { rows } = this.props;
    return (
      <View 
        style={[{ flex: 1 }, styles.sectionBorder]}
        onLayout={ 
          (event) => 
            this.measureView(event.nativeEvent.layout.height) 
        }
      >
        { this.renderRow() }
      </View>
    );
  }
}
export default Section;
