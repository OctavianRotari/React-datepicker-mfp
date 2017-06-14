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

Firebase.initializeApp(firebaseConfig)
const database = Firebase.database();

export default database;
