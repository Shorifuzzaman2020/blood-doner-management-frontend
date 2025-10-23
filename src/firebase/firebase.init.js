

// firebase.init.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAcPsRJvWwvuz-4uLtDYcv6FtnnmtqnCpk",
  authDomain: "blood-doner-management.firebaseapp.com",
  projectId: "blood-doner-management",
  storageBucket: "blood-doner-management.firebasestorage.app",
  messagingSenderId: "902701617683",
  appId: "1:902701617683:web:6b51332835fe99306825e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
