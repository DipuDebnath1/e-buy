import { createContext, useEffect, useState } from "react";
import { getLocalStoreData, setLocalStoreData } from "../script";

export const ContextData = createContext(null)


const ContextInfo = ({children}) => {
    const [localStorageData ,setLocalStorageData ] = useState([]) 
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const items =  localStorage.getItem('items')
        if (items ) {
            setLocalStorageData(JSON.parse(items))
        }
    },[count])

const data = {
    setLocalStoreData,
    getLocalStoreData,
    localStorageData,
    setCount, count
}

 
return <ContextData.Provider value={data}>
          {children}
      </ContextData.Provider>
};

export default ContextInfo;