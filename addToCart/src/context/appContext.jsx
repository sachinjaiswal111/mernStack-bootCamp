import { Children, useState } from "react";
import { createContext,useContext     } from "react";
import { dummyProducts } from "../assets/assets.js";


const AppContext= createContext();

export const AppContextProvider=({children})=>{

    const [product,setProduct]=useState([{}])
    const[cart,setCart]=useState([]);
    
    const value={cart,setCart};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext= ()=>useContext(AppContext)