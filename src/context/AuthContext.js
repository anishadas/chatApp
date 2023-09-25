import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState({});

    useEffect(() => {
        const res=onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            console.log(user)
        });

        return () => {
            res();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ currUser }}>
            {children}
        </AuthContext.Provider>    
    )
    
}
