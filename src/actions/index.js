// @flow
export const FETCH_DATAPOINTS = 'FETCH_DATAPOINTS';
const GENDER = {
  "name":"gender",
  "control":"toggle",
  "label":"Gender",
  "values":{
    "Male":{
      "selected": false
    },
    "Female":{
      "selected": true
    }
  }
}

export function fetchDataPoints() {
  return {
    type: FETCH_DATAPOINTS,
    payload: GENDER
  }
}
