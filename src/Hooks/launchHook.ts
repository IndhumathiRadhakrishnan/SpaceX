import { useEffect, useState } from "react"
import { LaunchSchema } from "../Models/launch.model"
import { useGetLaunchByIdQuery, useGetLaunchesQuery } from "../Services/launchesApi"

export const useLaunchHook = ({id} : {id?: string }) => {
    const { data: launchData, isLoading: launchLoading } = useGetLaunchesQuery()
    const { data: launchDetails, isLoading: launchDetailsLoading } = useGetLaunchByIdQuery(id ? id : '', { skip: !id })
    const [resultantSearch, setQueryResultantSearch] = useState<LaunchSchema[]>()
    
    useEffect(()=>{
        if(launchData && launchData.length > 0) {
            setQueryResultantSearch(launchData)
        }
      },[launchData])

    function handleSearchResult(results: string) {
        const filteredResults =  launchData?.filter((launches: LaunchSchema)=> launches.name.toLocaleLowerCase().includes(results.toLocaleLowerCase()))
        setQueryResultantSearch(filteredResults)
      }


    return {
        launchData, launchLoading, launchDetails, launchDetailsLoading, resultantSearch, handleSearchResult
    }
}