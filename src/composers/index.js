import Toggle from './ToggleComposer';
import Segmented from './SegmentedComposer';
import Numeral from './NumeralComposer';
import Datetime from './DatetimeComposer';

export function buildComposer(args) {
  const componsers = {
    Toggle,
    Segmented,
    Numeral,
    Datetime
  }

  const { control } = args.datapoint;
  const composerName = componsers[control];
  return new composerName(args);
}
