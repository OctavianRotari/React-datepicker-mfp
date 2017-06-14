// @flow
import _ from 'lodash';
import { FETCH_DATAPOINTS } from '../actions/index'

export default function( state = {}, action ) {
  switch(action.type) {
    case FETCH_DATAPOINTS:
      return _.mapKeys(action.payload, 'name');
    default:
      return state;
  }
}
