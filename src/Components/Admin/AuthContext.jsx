import React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext =  createContext();

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const  loginAdmin =  () => {
        setIsAdmin(true);
    }

    const logoutAdmin = () => { 

        setIsAdmin(false);
    
};
 
    return (
        <AuthContext.Provider value={{ isAdmin, loginAdmin, logoutAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);