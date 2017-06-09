// @flow
import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDDtJK6WtEwBwDab03aVorshQLTovJEltc",
  authDomain: "trauma-d2e6f.firebaseapp.com",
  databaseURL: "https://trauma-d2e6f.firebaseio.com",
  projectId: "trauma-d2e6f",
  storageBucket: "trauma-d2e6f.appspot.com",
  messagingSenderId: "682567408129"
}
const database = Firebase
  .initializeApp(firebaseConfig)
  .database();

export const FETCH_DATAPOINTS = 'FETCH_DATAPOINTS';

export function fetchDataPoints() {
  return dispatch => {
    return database.ref('/datapoints').once('value', snapshot => {
      dispatch({
        type: FETCH_DATAPOINTS,
        payload: snapshot.val()
      })
    })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_DATAPOINTS,
          payload: null
        })
      });
  }
}
