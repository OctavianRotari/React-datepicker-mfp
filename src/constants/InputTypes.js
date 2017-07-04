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
      const segmentedObjs = _.filter(events, { name: datapoint });
      const groupByValue = _.groupBy(segmentedObjs, 'value');
      let selectedSegment = [];
      for(var key in groupByValue) {
        const truthy = _.filter(groupByValue[key], { selected: true });
        const falsy = _.filter(groupByValue[key], { selected: false });
        if(truthy.length > falsy.length) {
          selectedSegment.push(truthy[truthy.length - 1].value);
        }
      }
      return selectedSegment;
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
