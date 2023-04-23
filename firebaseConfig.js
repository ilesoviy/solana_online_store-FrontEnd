import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBveNCE-zzLYVnXsfA3eA-EaFN25e2Vr0A',
  authDomain: "frontapp-28f45.firebaseapp.com",
  projectId: "frontapp-28f45",
  storageBucket: "frontapp-28f45.appspot.com",
  messagingSenderId: "1064351666274",
  appId: "1:1064351666274:web:25e862ad6cf31e4639813b",
  databaseURL: 'https://frontapp-28f45.firebaseio.com',
};

const firebase = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// export const firebaseAuth = getAuth(app);
export default firebase;