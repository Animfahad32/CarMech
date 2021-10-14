import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => { 
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => { 
            setUser(result.users);
        })
        .finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
           const unsubsctibed =  onAuthStateChanged(auth, user => { 
            if(user){
                setUser(user);
            }else{ 
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubsctibed;
    },[])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=> {})
        .finally(()=> setIsLoading(false))
    }
    return {
        isLoading,
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;