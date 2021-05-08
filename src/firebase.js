import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import apiKey from '../apiKey'

firebase.initializeApp({
  apiKey,
  authDomain: "mwproj-6329c.firebaseapp.com",
  databaseURL: "https://mwproj-6329c.firebaseio.com",
  projectId: "mwproj-6329c",
  storageBucket: "mwproj-6329c.appspot.com",
  messagingSenderId: "768861091783",
  appId: "1:768861091783:web:7ab51cde81ec315fbb0be2",
  measurementId: "G-SKS5WEPXFY"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()