"use client"
import { children, reducer } from "@/interfaces/appState";
import { createContext, useContext, useReducer } from "react";

import { appState } from "@/interfaces/appState";
import { AuthReducer } from "./AuthReducer";
const INITIAL_STATE:appState = {
   click:false,
   repaymnet:0,
   total:0
   
}
 const AuthContext =  createContext<reducer>({
    state:INITIAL_STATE,
    dispatch:()=>null

   })

export const  Context = ()=> {
    return useContext(AuthContext)
}
const AuthContextProvider:React.FC<children> = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
 
