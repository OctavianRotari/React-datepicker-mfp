import _ from 'lodash';

export default {
  Toggle: {
    value: 'Toggle',
    child: 'InputBox',
    singleton: true,
    selectedValue: (datapoint, events) => {
      const index = _.findLastIndex(events, {
        name: datapoint
      });
      return events[index];
    }
  },
  Segmented: {
    value: 'Segmented',
    child: 'InputBox',
    singleton: false,
    selectedValues: (datapoint, events) => {
      const truthyEvents = _.filter(events, { name: datapoint, selected: true });
      const falsyEvents = _.filter(events, { name: datapoint, selected: false });
      const array = truthyEvents.concat(falsyEvents);
      return _.differenceBy(array, falsyEvents, "value");
    }
  },
  Numeral: {
    value: 'Numeral',
    child: 'NumberPicker',
    singleton: false,
    fixed: (datapoint, events) => {
      const index = _.findLastIndex(events, {
        name: datapoint
      });
      return events[index];
    },
    cumulative: (datapoint, events) => {
      const numerals = _.filter(events, { name: datapoint })
      let sum = 0;
      _.map(numerals, numeral => {
        sum += parseInt(numeral.value);
      })
      return sum;
    }
  },
  Datetime: {
    value: 'Datetime',
    child: 'DatePicker',
    singleton: false,
    selectedTime: (datapoint, events) => {
      const index = _.findLastIndex(events, {
        name: datapoint
      });
      return events[index];
    }
  }
}
