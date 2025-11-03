import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
   // console.log(user)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

const logOut=()=>{
    return signOut(auth)
}


const signIn=(email,password)=>{
return signInWithEmailAndPassword(auth, email, password)

}






    useEffect(() => {

        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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
    }
    return <AuthContext value={authData}> {children}</AuthContext>
};

export default AuthProvider;