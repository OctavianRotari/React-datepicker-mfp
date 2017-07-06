import _ from 'lodash';

const SegmentedComposer = class {
  constructor(events, datapointName) {
    this.events = events;
    this.datapointName = datapointName;
    this.child = 'InputBox';
    this.value = 'Segmented';
    this.singleton = false;
  }

  selectedValues() {
    const segmentedObjs = _.filter(this.events, {
      name: this.datapointName
    });
    const groupByValue = _.groupBy(segmentedObjs, 'value');
    let selectedValues = [];
    for(var key in groupByValue) {
      const truthy = _.filter(groupByValue[key], { selected: true });
      const falsy = _.filter(groupByValue[key], { selected: false });
      if(truthy.length > falsy.length) {
        selectedValues.push(truthy[truthy.length - 1].value);
      }
    }
    if(selectedValues.length > 0 ) {
      return selectedValues;
    }
    return null;
  }
}

export default SegmentedComposer;
