import React, { createContext, useState } from "react";
import { auth} from '../../firebase-config';
import { setPersistence, signInWithEmailAndPassword, } from "firebase/auth";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ------------Register user--------------------
    async function registerUser() {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const newUser = userCredential.user;
          console.log('Register User-------------', newUser)
        })
        .catch((err) => {
          alert(err.message);
          return err.message;
        })
    };

    // Sign In for created user --- email/password
    async function signInUser() {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('SignIn User------------', user);
        })
          .catch((err) => {
            alert(err.message);
            return err.message;
        })
    };

    return (
        <AuthContext.Provider 
          value={{ email, setEmail, password, setPassword, registerUser, signInUser }}>
          {props.children}
        </AuthContext.Provider>
      );

};
    
    