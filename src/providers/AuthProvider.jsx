import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { ServerContext } from './ServerLinkProveder';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const { serverLink } = useContext(ServerContext)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function popUpSignIn(provider) {
        return signInWithPopup(auth, provider)
    }
    function logOutUser() {
        signOut(auth)
            .then(() => {
                ('// Sign-out successful.');
            }).catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            const userEmail = currentUser?.email || user?.email
            const userId = currentUser?.uid || user?.uid
            setLoading(false);
            const jwtUser = { user: userEmail, uid: userId }
            if (currentUser) {
                axios.post(`${serverLink}/login`, jwtUser, { withCredentials: true })
                    .then(res => {
                        (res.data);
                    }).catch(error => console.error(error))
            } else {
                axios.post(`${serverLink}/logout`, jwtUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    }).catch(error => console.error(error))
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        auth,
        setUser,
        setLoading,
        createUser,
        loginUser,
        popUpSignIn,
        logOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;