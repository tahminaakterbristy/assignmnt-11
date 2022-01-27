import React, { createContext } from 'react';
import LogInWithFirebase from '../Firebase/LogInFIrebase';
export  const FirebaseContext = createContext();

const AuthContext = (props) => {
    const {children} = props;
  

  











    return (
        <FirebaseContext.Provider value={LogInWithFirebase()}>

            {children}






        </FirebaseContext.Provider>
    );
};

export default AuthContext;