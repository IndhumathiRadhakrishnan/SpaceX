import { useNavigate } from "react-router-dom";
import ImageHolder from "../../Components/ImageHolder"
import { RocketSchema } from "../../Models/rocket.model"
import { useGetRocketsQuery } from "../../Services/rocketsApi"


function Rockets(){
    const navigate = useNavigate();
    const { data: rocketsData } = useGetRocketsQuery()
   
    return (
        <div className="bg-black w-full h-full text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-20 gap-20 ">

                {rocketsData?.map((rockets: RocketSchema) =>
                    <>
                        <div className="flex flex-col gap-y-2">
                            <ImageHolder className="w-full h-[20rem]  md:h-[26rem]  bg-red-200 object-cover" image={rockets.flickr_images[0] ? rockets.flickr_images[0] : undefined} />
                            <div className="text-2xl">{rockets.first_flight}</div>
                            <div className="flex flex-row gap-4 text-3xl ">
                                <span className="text-3xl">{rockets.name} </span>
                            </div>

                            <div className="flex flex-row">
                                <button className="learn-more-button" onClick={()=>{navigate(`/rockets/${rockets.id}`)}}>Learn More</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )

}
export default Rockets