import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
export const AuthContext = createContext();
import { getAuth } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //console.log(user)
    const [loading, setLoading] = useState(true)
   
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }


    const createUser = (email, password) => {
          setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const signIn = (email, password) => {
       setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }






    useEffect(() => {

        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsuscribe();
        }

    }, [])
    const authData = {
        user, setUser,
        createUser,
        logOut,
        signIn,
        loading,setLoading,
        updateUser,
    }
    return <AuthContext value={authData}> {children}</AuthContext>
};

export default AuthProvider;