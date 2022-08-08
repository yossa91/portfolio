import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/router.js'
import '../src/assets/css/reset.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtBy-tQs84iJK-eKS935ixRiq6FrLofTM",
  authDomain: "vuetest-bfc38.firebaseapp.com",
  databaseURL: "https://vuetest-bfc38-default-rtdb.firebaseio.com",
  projectId: "vuetest-bfc38",
  storageBucket: "vuetest-bfc38.appspot.com",
  messagingSenderId: "207412354347",
  appId: "1:207412354347:web:e2be8c534b6c389c57396e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app  = createApp(App);
app.use(router)
app.mount('#app')