import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/firestore";

import firebaseConfig from "@/configs/firebaseConfig.json";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
