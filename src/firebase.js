import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyBXVCDEjJMelaMY_EQnCpK-plgDCVhMbpk',
  authDomain: 'vue-expense-tracker.firebaseapp.com',
  databaseURL: 'https://vue-expense-tracker.firebaseio.com',
  projectId: 'vue-expense-tracker',
  storageBucket: 'vue-expense-tracker.appspot.com',
  messagingSenderId: '643982284461',
  appId: '1:643982284461:web:048f9e1f5250ee76e7d824',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');

// export utils/refs
export {
  db,
  auth,
  usersCollection,
};
