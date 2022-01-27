import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import {useEffect, useState} from 'react'
import { useHistory } from "react-router";
import firebaseInitialization from "./FIrebaseInitialization";

firebaseInitialization();



const LogInWithFirebase = ()=>{
    const auth = getAuth();
    const history = useHistory();

    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);



   const emailPasswordLogIn = (email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user = result.user;

        setUser(user);
     
       
        console.log(user);
    })
    .catch(err=>{
        const errMsg = err.message;
        console.log(errMsg);
        setErrorMsg(errMsg);
    })
   }


   const logInwithGoogle = (locationUrl)=>{
       setIsLoading(true)
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result=>{
        const user = result.user;
     
        setUser(user);
        console.log(locationUrl);
        if (user) {
            history.push(locationUrl) 
        }
       
    })
    .catch(err=>{
        const errMsg = err.message;
        console.log(errMsg);
        setErrorMsg(errMsg);

    })
    .finally(()=>setIsLoading(false))







   }

   const logInWithGitHub = ()=>{
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then(result=>{
        const user = result.user;
        setUser(user);
        console.log(user);
    })
    .catch(err=>{
        const errmsg = err.message;
        console.log(errmsg);
        setErrorMsg(errmsg);
    })









   }



   const emailPasswordSingIn = (email, password)=>{

    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
        user = result.user;
        console.log(user);
        setUser(user)
    })
    .catch(err=>{
        const errmsg = err.message;
        setErrorMsg(errmsg);
        console.log(err);
    })





   }









   const logOut = ()=>{
       setIsLoading(true);
       signOut(auth)
       .then(()=>{
           setUser('')
           console.log('Log out successfull');
       })
       .catch(err=>{
           console.log(err);
       })
       .finally(()=>setIsLoading(false))

   }



  
   const authStateChange = ()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
        else{
            setUser('')
        }
        setIsLoading(false)
    })

   }
   






   






























    return{
        user,
        errorMsg,
        setErrorMsg,
        setUser,
        emailPasswordLogIn,
        logInwithGoogle,
        logInWithGitHub,
        authStateChange,
        logOut,
        emailPasswordSingIn,
        isLoading

    }





}

export default LogInWithFirebase;