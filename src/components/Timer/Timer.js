import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
require('moment-duration-format');
import TimeFormat from '../../constants/TimeFormat';

import { ifss } from '../../styles/styles';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      format: props.format,
      timeElapsed: null
    }
  }

  setFormat(timestamp) {
    const hours = timestamp/1000/60/60;
    const minutes = timestamp/1000/60;
    if (minutes < 1) {
      this.setState({format: TimeFormat.seconds});
    } else if (hours < 1) {
      this.setState({format: TimeFormat.minutes});
    } else if (hours >= 1){
      this.setState({format: TimeFormat.hours});
    }
  }

  tick() {
    const { countDirection, timestamp } = this.props;
    const t = moment.unix(timestamp);
    const ct = moment();
    if(countDirection === "up") {
      diffTime = ct.diff(t);
      this.setFormat(diffTime);
    } else if (countDirection === "down") {
      diffTime = t.diff(ct);
      this.setFormat(diffTime);
    }
    const time = moment.duration(diffTime, "milliseconds").format(this.state.format);
    this.setState({timeElapsed: time})
  }

  componentWillUnmount() {
    clerInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    return(
      <Text style={[ ifss.textSelected, ifss.topBarText ]}>{ this.state.timeElapsed }</Text>
    )
  }
}

export default Timer;
