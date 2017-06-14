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
export const FETCH_FORM = 'FETCH_FORM';

export function fetchDatapoints() {
  return dispatch => {
    return database.ref('/datapoints')
      .once('value', snap => {
        dispatch({
          type: FETCH_DATAPOINTS,
          payload: snap.val()
        });
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

export function fetchForm(name: string) {
  return dispatch => {
    return database.ref(`/forms/${name}`).once('value', snap => {
      dispatch({
        type: FETCH_FORM,
        payload: snap.val()
      });
    })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_FORM,
          payload: null
        })
      });
  }
}
