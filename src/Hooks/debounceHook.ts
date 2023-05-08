import { useEffect, useState } from "react";

function useDebounce(value: string , time: number){
    const [debounceValue, setDebounceValue] = useState(value);
    
    useEffect(()=>{
        const timer = setTimeout(()=> setDebounceValue(value), time || 500)
        return () => {
            clearTimeout(timer)
          }
    },[value,time])
    return debounceValue
}
export default useDebounce