import * as firebase from 'firebase/app'
import 'firebase/auth'

const settings = require('../../settings.json');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: settings.firebase.apiKey,
  authDomain: settings.firebase.authDomain,
  databaseURL: settings.firebase.databaseURL,
  projectId: settings.firebase.projectId,
  storageBucket: settings.firebase.storageBucket,
  messagingSenderId: settings.firebase.messagingSenderId,
  appId: settings.firebase.appId,
  measurementId: settings.firebase.measurementId
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
export const auth = firebase.auth();
export default firebase