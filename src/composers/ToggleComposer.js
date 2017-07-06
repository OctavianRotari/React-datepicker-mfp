import _ from 'lodash';

const ToggleComposer = class {
  constructor(events, datapointName) {
    this.events = events;
    this.datapointName = datapointName;
    this.child = 'InputBox';
    this.value = 'Toggle';
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
}

export default ToggleComposer;
