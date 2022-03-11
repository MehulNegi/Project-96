import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB7Bx1e5CP1AmubhQ0NOb0z6S6c8st7AZI",
  authDomain: "buzzer-app-2beeb.firebaseapp.com",
  databaseURL: "https://buzzer-app-2beeb-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-2beeb",
  storageBucket: "buzzer-app-2beeb.appspot.com",
  messagingSenderId: "771964096061",
  appId: "1:771964096061:web:3b2d1e064439ed5f886454"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();