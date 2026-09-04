// Import the functions you need from the SDKs via CDN module URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvAyLdlGBBg69NgmfZu9M5eyto7nO6rjg",
  authDomain: "study-67f83.firebaseapp.com",
  projectId: "study-67f83",
  storageBucket: "study-67f83.firebasestorage.app",
  messagingSenderId: "66545572186",
  appId: "1:66545572186:web:cb03b704259d19ef3ffb63",
  measurementId: "G-P29P1H5WNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);