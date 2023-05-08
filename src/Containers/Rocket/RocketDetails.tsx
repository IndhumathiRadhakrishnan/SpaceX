import { useParams } from "react-router-dom"
import ImageHolder from "../../Components/ImageHolder"
import StageDetails from "./StageDetails"
import RocketConfiguration from "./RocketConfigurations"
import { useRocketHook } from "../../Hooks/rocketHook"


function RocketDetails() {

    const { id } = useParams()
    const { rocketDetails, rocketDetailsLoading } = useRocketHook({id})
    

    if (!rocketDetails) {
        return null;
    }

    return ( 
        <div className="bg-black w-full h-full text-white flex flex-col gap-y-10">
            <div className={`grid grid-cols-1 md:grid-cols-${rocketDetails?.flickr_images.length} md:justify-center mx-20 gap-20 content-center justify-center`}>
                {rocketDetails?.flickr_images.map((images: string) =>
                    <ImageHolder className="w-full h-[25rem] hover:scale-110  object-cover rounded-lg " image={images} />
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <RocketConfiguration rocketDetails={rocketDetails} details={true} />
                <ImageHolder className="object-cover" image={rocketDetails?.flickr_images[4] ? rocketDetails?.flickr_images[4] : undefined} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <ImageHolder className="object-cover" image={rocketDetails?.flickr_images[5] ? rocketDetails?.flickr_images[5] : undefined} />
                <RocketConfiguration rocketDetails={rocketDetails} details={false} />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 md:justify-center mx-20 gap-20 content-center justify-center">
                <div className=" flex justify-center items-center">
                    <div className="h-0.5 w-full bg-white"></div>
                    <div className="rounded-full h-20 w-20 border bg-gray-400 p-2 flex justify-center text-2xl items-center">1</div>
                    <div className="h-0.5 w-full bg-white"></div>
                    <hr className="bg-red-200"/>
                    {/* <RIGHT_ARROW stroke="white"  className="animate-spin translate-x-10 h-10 w-10"  /> */}
                </div>
                <StageDetails  stageDetails={rocketDetails.first_stage} />
                <div className=" flex justify-center items-center">
                <div className="h-0.5 w-full bg-white"></div>
                    <div className="rounded-full h-20 w-20 border bg-gray-400 p-2 flex text-2xl justify-center items-center">2</div>
                    <div className="h-0.5 w-full bg-white"></div>

                </div>
                <StageDetails stageDetails={rocketDetails.second_stage} />
            </div>

        </div>
    )
}
export default RocketDetails