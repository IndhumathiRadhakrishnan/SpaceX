import { useParams } from "react-router-dom"
import { formatDateToTimezone } from "../../Utils/dateTime"
import ImageHolder from "../../Components/ImageHolder"
import { useLaunchHook } from "../../Hooks/launchHook"

function LaunchDetails(){

    const { id } = useParams()
    const { launchDetails, launchDetailsLoading } = useLaunchHook({ id })
    
    if(!launchDetails){
        return null
    }

    return(
        <div className="bg-black w-full h-full text-white flex flex-col ">
            <div className={`grid grid-row-1 md:grid-row-3 md:justify-center content-center justify-center mx-20`}>
           
            <iframe className = " w-full h-[30rem]"title="launchVideo" src={launchDetails?.links?.webcast?.includes('watch?v=') ? launchDetails?.links?.webcast?.replace("watch?v=", "embed/") : 'https://www.youtube.com/embed/' + launchDetails?.links?.youtube_id} ></iframe>
            
            <div className="flex flex-col gap-4">
            <span className=" text-3xl">{formatDateToTimezone(launchDetails.date_utc)}</span>
            <span className=" text-6xl">{launchDetails.name}</span>
            <span className="text-xl">{launchDetails.details}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10">
               <ImageHolder image={launchDetails.links.flickr.original[0]? launchDetails.links.flickr.original[0] : undefined} className="w-full h-[30rem]"/>
               <ImageHolder image={launchDetails.links.patch.large? launchDetails.links.patch.large : undefined} className="w-full h-[30rem]"/>
                <div>Failures</div> <div>Crew</div>
            </div>
            </div>
        </div>
    )
}
    export default LaunchDetails