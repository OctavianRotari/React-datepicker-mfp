// @flow
import _ from 'lodash';
import { FETCH_FORM } from '../actions/index'

export default function( state = {}, action ) {
  switch(action.type) {
    case FETCH_FORM:
      console.log('fo', action.payload)
      console.log('from', _.mapValues(action.payload.children, 'name'))
      return _.mapValues(action.payload.children, 'name');
    default:
      return state;
  }
}
