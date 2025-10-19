
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Firebase/firebase.config';


// 1. Create context and export
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // 3.akta state declare kore user er data gula rakho
    const [user,setUser]=useState(null);
    console.log(user);
// Register
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
// LogOut
    const logout=()=>{
        return signOut(auth)
    }
// Login
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // ------------------------------------------------------------------------------------------------------------
    // email password user a set holeo reload korle null hoye jai. Karon kothao save thakche na. tai akta observer set korte hoi jekhane value gula thakbe. Sheta hocche onAuthStateChanged

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        //    jodi user thake setUser a set koro 
        setUser(currentUser);
        })
        // onAuthStateChanged function return koro
        return ()=>{
            unsubscribe();
        }
    },[])
    // ------------------------------------------------------------------------------------------------------------
    // 4.data gula dia akta object toiry koro 
    const authData={
        // user: user,
        user,
        setUser,
        createUser,
        logout, 
        login,
    }
    // 2. AuthProvider theke AuthContext ke return kore dewa
    // 5. AuthContext a value hishabe obj ta pass koro
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
    // 6.main.jsx a gia routerProvider k authProvider er bhitor rakho
    // 7.authProvider theke routerProvider k pete hole ,routerProvider k children hishebe pathte hobe 
};

export default AuthProvider;