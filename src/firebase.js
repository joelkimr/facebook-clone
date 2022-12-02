import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCP0GN3vnUj8wYelnIvEIS9h7XCGCBGMvo",
  authDomain: "facebook-clone-30060.firebaseapp.com",
  projectId: "facebook-clone-30060",
  storageBucket: "facebook-clone-30060.appspot.com",
  messagingSenderId: "483171646416",
  appId: "1:483171646416:web:64f81bae3622ebfad057d5",
  measurementId: "G-1VWE077GSR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
