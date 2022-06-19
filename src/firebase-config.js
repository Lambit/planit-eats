import { 
    FIREBASE_KEY, 
    FIREBASE_DOM, 
    FIREBASE_PROJ_ID, 
    FIREBASE_SBUCK, 
    FIREBASE_SENDER, 
    FIREBASE_APP_ID, 
    
} from '@env';
import { initializeApp, } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence,  } from 'firebase/auth';

// import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// http://localhost:8081

const firebaseConfig = {
    apiKey: FIREBASE_KEY,
    authDomain: FIREBASE_DOM,
    databaseURL: "https://planiteats-87148-default-rtdb.firebaseio.com",
    projectId: FIREBASE_PROJ_ID,
    storageBucket: FIREBASE_SBUCK,
    messagingSenderId: FIREBASE_SENDER,
    appId: FIREBASE_APP_ID,
    
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

