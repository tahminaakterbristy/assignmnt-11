import { useContext, useEffect } from "react"
import AuthContext, { FirebaseContext } from "./AuthContext"

const useAuthContext = ()=>{
    return useContext(FirebaseContext);
}

export default useAuthContext;