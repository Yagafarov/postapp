import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut,onAuthStateChanged  } from 'firebase/auth';
import {getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCabMCSvoQSSMzHNK3VbFiw8s9HeDn7aa0",
  authDomain: "green-dfcc7.firebaseapp.com",
  projectId: "green-dfcc7",
  storageBucket: "green-dfcc7.appspot.com",
  messagingSenderId: "1064763198061",
  appId: "1:1064763198061:web:11291be84a572a1b948d64",
  measurementId: "G-LESM4Z4KEF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword,onAuthStateChanged, signOut, collection, getDocs, addDoc, updateDoc, deleteDoc, doc };