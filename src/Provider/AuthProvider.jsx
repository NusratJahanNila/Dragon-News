import React, { useState } from 'react';
import { createContext } from 'react';

// 1. Create context and export
export const AuthContext= createContext();
const AuthProvider = ({children}) => {
    // 3.akta state declare kore user er data gula rakho
    const [user,setUser]=useState({
        name:'nila',
        email: 'Nila@g.com'
    })
    // 4.data gula dia akta object toiry koro 
    const authData={
        // user: user,
        user,
        setUser,
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