import _ from 'lodash';

const DatetimeComposer = class {
  constructor(events, datapointName) {
    this.events = events;
    this.datapointName = datapointName;
    this.singleton = false;
    this.child = 'DatePicker';
    this.value = 'Datetime';
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
}

export default DatetimeComposer;
