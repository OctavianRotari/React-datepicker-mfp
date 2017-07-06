import _ from 'lodash';

const NumeralComposer = class {
  constructor(events, datapointName) {
    this.events = events;
    this.datapointName = datapointName;
    this.child = 'NumberPicker';
    this.value = 'Numeral';
    this.singleton = false;
  }

  selectedValues() {
    const index = _.findLastIndex(this.events, {
      name: this.datapointName
    });
    if(this.events[index] && this.events[index].selected) {
      const { value } = this.events[index]
      return value;
    }
    return null;
  }

  cumulative() {
    const numerals = _.filter(events, { name: this.datapointName })
    let sum = 0;
    _.map(numerals, numeral => {
      sum += parseInt(numeral.value);
    })
    return sum;
  }
}

export default NumeralComposer;

