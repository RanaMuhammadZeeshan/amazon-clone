import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzEunrbxuEZaB8QgGgi5j2MwW8vD1Nnls",
  authDomain: "clone-b2bbb.firebaseapp.com",
  databaseURL: "https://clone-b2bbb.firebaseio.com",
  projectId: "clone-b2bbb",
  storageBucket: "clone-b2bbb.appspot.com",
  messagingSenderId: "328124338869",
  appId: "1:328124338869:web:c073fe5871b8697c3964fc",
  measurementId: "G-S9BZ2N0MCL",
});

const auth = firebase.auth();

export { auth };
