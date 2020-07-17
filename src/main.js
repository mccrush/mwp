import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // DB
import "firebase/storage"; // File

import apiKey from '../apiKey'
const firebaseConfig = {
  apiKey,
  authDomain: "mwproj-6329c.firebaseapp.com",
  databaseURL: "https://mwproj-6329c.firebaseio.com",
  projectId: "mwproj-6329c",
  storageBucket: "mwproj-6329c.appspot.com",
  messagingSenderId: "768861091783",
  appId: "1:768861091783:web:7ab51cde81ec315fbb0be2",
  measurementId: "G-SKS5WEPXFY"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let app = "";
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})