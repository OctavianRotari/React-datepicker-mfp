import _ from 'lodash';

const NumeralComposer = class {
  constructor(args) {
    this.child = 'NumberPicker';
    this.events = args.events;
    this.name = args.datapoint.name;
    this.control = args.datapoint.control;
    this.values = args.datapoint.values;
    this.singleton = false;
    this.selectedValue = this._selectedValue();
  }

  _selectedValue() {
    const index = _.findLastIndex(this.events, {
      name: this.name
    });
    if(this.events[index] && this.events[index].selected) {
      const { value } = this.events[index]
      return value;
    }
    return this.values.selected.toString();
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

