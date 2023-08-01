import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBiKQn_iMqX_c1d8XKVct8OZnwr1SXbqAk",
    authDomain: "budget-app-40715.firebaseapp.com",
    projectId: "budget-app-40715",
    storageBucket: "budget-app-40715.appspot.com",
    messagingSenderId: "885922145873",
    appId: "1:885922145873:web:c14e1a8adf7162b0c33a70"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);