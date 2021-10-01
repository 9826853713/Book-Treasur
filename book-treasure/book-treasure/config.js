import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBeQzcVXpmueHFNQLwv13qphfJin7zyVcU",
  authDomain: "book-santa-73052.firebaseapp.com",
  projectId: "book-santa-73052",
  storageBucket: "book-santa-73052.appspot.com",
  messagingSenderId: "969232132275",
  appId: "1:969232132275:web:f410b049a37a51f169e8c6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
