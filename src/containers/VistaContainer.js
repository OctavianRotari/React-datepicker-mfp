import React, { Component } from 'react';
import _ from 'lodash';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import Vista from '../components/Vista';
import { fetchForm } from '../actions/'

class VistaContainer extends Component {
  componentDidMount() {
    this.props.fetchForm(this.props.name);
  }

  render() {
    const form = this.props.form;
    if(_.isEmpty(form)) {
      return(
        <View>
          <ActivityIndicator />
        </View>
      );
    };

    return(
      <View>
        <Vista
          name={ this.props.name }
          form={ form }
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    form: state.form
  };
}

export default connect(mapStateToProps, { fetchForm })(VistaContainer);
