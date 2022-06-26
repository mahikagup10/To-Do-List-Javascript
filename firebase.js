const firebaseConfig = {
    apiKey: "AIzaSyBqDT34pGRkBtzpdQtWAANTZ3sI48GzvEE",
    authDomain: "to-do-karmik.firebaseapp.com",
    projectId: "to-do-karmik",
    storageBucket: "to-do-karmik.appspot.com",
    messagingSenderId: "904712998092",
    appId: "1:904712998092:web:5c7da810dd82fe322a0669",
    measurementId: "G-2J5Z6B7JZB"
  };


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();



