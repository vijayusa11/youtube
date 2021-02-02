import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmhKUrVlgcKPQvMQ1rpn8pF-reYLTMD6k",
  authDomain: "fir-39ae4.firebaseapp.com",
  projectId: "fir-39ae4",
  storageBucket: "fir-39ae4.appspot.com",
  messagingSenderId: "917965235224",
  appId: "1:917965235224:web:2ba99cc491c8bdec560f6d",
  measurementId: "G-D3PPS7YRWZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db };
export { auth, provider };