import React, { Component } from 'react';
import _ from 'lodash';
import RowContainer from '../../containers/RowContainer';
import { cmss, rss } from '../../styles/styles';
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
      const showBorder = rows.length === index + 1 ? null : cmss.borderBottom
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

  showSectionLabel() {
    const { showLabel, label } = this.props;
    if(showLabel){
      return(
        <View style={[{flex:1}, rss.labelRow, cmss.borderRight]}>
          <Text 
            style={
              [
                rss.textRot, 
                { minWidth: this.state.height} 
              ]
            }
          >
            { label }
          </Text>
        </View>
      )
    }
  }

  render() {
    const { rows } = this.props;
    return (
      <View style={{flex:1, flexDirection: "row"}}>
        { this.showSectionLabel() }
        <View
          style={{ flex: 30 }}
          onLayout={
            (event) =>
              this.measureView(event.nativeEvent.layout.height)
          }
        >
          { this.renderRow() }
        </View>
      </View>
    );
  }
}
export default Section;
