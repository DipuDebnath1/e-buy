import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContaxt = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const Onsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return Onsubscribe
    },[])


const authInfo = {
    register,
    login,
    logout,
    user
}

return(
    <AuthContaxt.Provider value={authInfo}>
        {children}
    </AuthContaxt.Provider>
)
 
};

export default AuthProvider;