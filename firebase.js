import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv4j4xDl6Pw-XKRzLvEPeHRCKI02YW3rw",
  authDomain: "amendis-pfe.firebaseapp.com",
  projectId: "amendis-pfe",
  storageBucket: "amendis-pfe.appspot.com",
  messagingSenderId: "188582858095",
  appId: "1:188582858095:web:ed971b022f8993ec7a2c9a"
};

if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

//export const Housesref = db.collection ("Houses") ;
export default db;
