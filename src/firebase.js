// import firebase from "firebase/app"
// import "firebase/firestore"
// import "firebase/auth"
// import apiKey from '../apiKey'

import { initializeApp } from 'firebase/app'
import { apiKey } from './../apiKey'

const firebaseConfig = {
  apiKey,
  authDomain: "mwproj-6329c.firebaseapp.com",
  databaseURL: "https://mwproj-6329c.firebaseio.com",
  projectId: "mwproj-6329c",
  storageBucket: "mwproj-6329c.appspot.com",
  messagingSenderId: "768861091783",
  appId: "1:768861091783:web:7ab51cde81ec315fbb0be2",
  measurementId: "G-SKS5WEPXFY"
}

// export const db = firebase.firestore()
// export const auth = firebase.auth()

const fireApp = initializeApp(firebaseConfig)

export default fireApp