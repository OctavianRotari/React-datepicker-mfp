import Toggle from './ToggleComposer';
import Segmented from './SegmentedComposer';
import Numeral from './NumeralComposer';
import Datetime from './DatetimeComposer';

export function buildComposer (control, events, datapointName) {
  const componsers = {
    Toggle,
    Segmented,
    Numeral,
    Datetime
  }

  const composerName = componsers[control];
  return new composerName(events, datapointName);
}
