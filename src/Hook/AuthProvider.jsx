import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "./firebase.config";
import { useState } from "react";


const auth = getAuth(app);


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userinfo ={
        user, 
        loading,
        createUser,
        logInUser
       
    }
    return (
        <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;