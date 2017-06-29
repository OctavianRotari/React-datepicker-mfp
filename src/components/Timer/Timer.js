import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import { ifss } from '../../styles/styles';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0 }
    this.tick = this.tick.bind(this);
  }

  tick() {
    const { countDirection, format } = this.props;
    let diffSeconds;
    const eventTime = moment.unix(this.props.timestamp);
    if(countDirection === "up") {
      diffSeconds = moment().diff(eventTime, 'seconds');
    } else if (countDirection === "down") {
      diffSeconds = eventTime.diff(moment(), 'seconds');
    }
    const time = moment.utc(diffSeconds * 1000).format(format)
    this.setState({timeElapsed: time})
  }

  countUp(eventTime) {
  }

  componentWillUnmount() {
    clerInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    return(
      <Text style={ ifss.textSelected }>{ this.state.timeElapsed }</Text>
    )
  }
}

export default Timer;
