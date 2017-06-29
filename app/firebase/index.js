import firebase from 'firebase';
import {config} from 'firebase-config';

try {
  firebase.initializeApp(config);
} catch (e) {}


export var firebaseRef = firebase.database().ref();
export default firebase;
