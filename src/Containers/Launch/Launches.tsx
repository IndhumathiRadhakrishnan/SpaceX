
import { useNavigate } from "react-router-dom"
import ImageHolder from "../../Components/ImageHolder"
import { LaunchSchema } from "../../Models/launch.model"
import { formatDateToTimezone, formatTimeToTimezone } from "../../Utils/dateTime"
import { useEffect, useState } from "react"
import { useLaunchHook } from "../../Hooks/launchHook"
import SearchBar from "../../Components/SearchBar"


function Launches() {
    
    const navigate = useNavigate();
    const { launchData, launchLoading,handleSearchResult, resultantSearch } = useLaunchHook({})

    if(!launchData){
        return null
    }
    
    return (
        <>

            <div className="flex flex-col  w-full h-full text-white gap-y-2">
                
            <SearchBar searchData={launchData} onSearchResult={handleSearchResult}/>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-20 gap-20 ">

                    {resultantSearch?.map((launches: LaunchSchema) =>
                        <>
                            <div className="flex flex-col gap-y-2">
                                <ImageHolder className="w-full h-[20rem]  md:h-[24rem]  object-cover" image={launches.links.flickr.original[0] ? launches.links.flickr.original[0] : undefined} />
                                <div className="text-2xl">{formatDateToTimezone(launches.date_utc) + ' - ' + formatTimeToTimezone(launches.date_utc)}</div>
                                <div className="flex flex-row gap-4 text-3xl ">
                                    <span className="text-3xl">{launches.name} - {launches.flight_number}</span>
                                </div>

                                <div className="flex flex-row">
                                    <button className="learn-more-button" onClick={() => { navigate(`/launches/${launches.id}`) }}>Learn More</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )

}
export default Launches