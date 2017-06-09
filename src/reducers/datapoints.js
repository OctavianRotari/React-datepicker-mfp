import { FETCH_DATAPOINTS } from '../actions/index'

export default function( state={}, action ) {
  switch(action.type) {
      case FETCH_DATAPOINTS:
       return { ...state, action.payload.data }
      break;
  }
