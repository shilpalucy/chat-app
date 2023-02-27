

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const config = {
  apiKey: "AIzaSyCdA5EENSyooClmh7zNfAQ991lFH_XGGGA",
  authDomain: "chat-app-a743a.firebaseapp.com",
  databaseURL: "https://chat-app-a743a-default-rtdb.firebaseio.com",
  projectId: "chat-app-a743a",
  storageBucket: "chat-app-a743a.appspot.com",
  messagingSenderId: "561872548035",
  appId: "1:561872548035:web:9bc292cc2f762b69cb3276"
};



const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();



