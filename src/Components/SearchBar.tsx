import { ChangeEvent, useEffect, useState } from "react"
import { ReactComponent as SEARCH_GLASS } from '../Assets/search-icon.svg'
import useDebounce from "../Hooks/debounceHook"

function SearchBar ({onSearchResult }:{onSearchResult: (query: string)=>void}){
    
    const [querySearch, setQuerySearch] = useState('')
    const debouncedValue = useDebounce(querySearch, 500)

    const handleSearch = ((event: ChangeEvent<HTMLInputElement>) =>{
        setQuerySearch(event.target.value)
    })

    useEffect(()=>{
        onSearchResult(debouncedValue)
    },[debouncedValue, onSearchResult])

    return (
        <div className='relative mx-auto p-2'>
            <SEARCH_GLASS className="w-6 h-6 absolute z-20 my-auto top-0 bottom-0 left-4"  stroke="white"/>
            <input type="text" placeholder="Search here" className=" pl-10 py-2 w-full bg-black border " onChange={handleSearch}/>
        </div>
    )

}
export default SearchBar