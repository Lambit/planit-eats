import { 
    FIREBASE_KEY, 
    FIREBASE_DOM, 
    FIREBASE_PROJ_ID, 
    FIREBASE_SBUCK, 
    FIREBASE_SENDER, 
    FIREBASE_APP_ID, 
    FIREBASE_MEAS_ID,
    MOCK_TOKEN } from '@env';

const token = MOCK_TOKEN;

// Import the functions you need from the SDKs you need
import { getFirestore, addDoc, setDoc, collection, connectFirestoreEmulator, firebaseEmulators,  } from 'firebase/firestore';
import { initializeApp, } from "firebase/app";
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence,  } from 'firebase/auth';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: FIREBASE_KEY,
    authDomain: FIREBASE_DOM,
    projectId: FIREBASE_PROJ_ID,
    storageBucket: FIREBASE_SBUCK,
    messagingSenderId: FIREBASE_SENDER,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEAS_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// const presist = (async () => {
//   await setPersistence(auth, browserLocalPersistence);
// })();

// console.log(presist);
// connectFirestoreEmulator(db, 'localhost',5010);
// connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });

