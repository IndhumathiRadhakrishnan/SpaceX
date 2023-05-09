import { useParams } from "react-router-dom"
import ImageHolder from "../../Components/ImageHolder"
import StageDetails from "./StageDetails"
import RocketConfiguration from "./RocketConfigurations"
import { useRocketHook } from "../../Hooks/rocketHook"
import Loading from "../../Components/Loading"
import NothingFound from "../../Components/NothingFound"
import { ReactComponent as RIGHT_ARROW } from '../../Assets/iconmonstr-arrow-right-thin.svg'
import { ReactComponent as DOWN_ARROW } from '../../Assets/iconmonstr-arrow-down-thin.svg'


function RocketDetails() {

    const { id } = useParams()
    const { rocketDetails, rocketDetailsLoading } = useRocketHook({ id })

    if (rocketDetailsLoading) {
        return (<Loading />)
    }
    if (!rocketDetails) {
        return (<NothingFound />)
    }

    return (
        <div className="bg-black w-full h-full text-white flex flex-col gap-y-10 mb-4 mt-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${rocketDetails?.flickr_images.length > 3 ? 4 : rocketDetails?.flickr_images.length} md:justify-center mx-20 gap-20 content-center justify-center`}>
                {rocketDetails?.flickr_images.slice(0, 4).map((images: string) =>
                    <ImageHolder className="w-full h-[25rem] hover:scale-110  transition-all object-cover rounded-lg " image={images} />
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <RocketConfiguration rocketDetails={rocketDetails} details={true} />
                <ImageHolder className="object-cover px-20" image={rocketDetails?.flickr_images[4] ? rocketDetails?.flickr_images[4] : undefined} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <ImageHolder className="object-cover px-20" image={rocketDetails?.flickr_images[5] ? rocketDetails?.flickr_images[5] : undefined} />
                <RocketConfiguration rocketDetails={rocketDetails} details={false} />
            </div>

            <div className="px-20 text-4xl">Stages</div>

            <div className="md:grid grid-cols-1 lg:grid-cols-4 md:justify-center lg:justify-center mx-20 gap-20 content-center justify-center">

                <div className=" flex lg:flex-row sm:flex-col xs:flex-col justify-center items-center xs:py-6">
                    <div className="rounded-full h-20 w-20 border  p-2 flex text-2xl justify-center items-center">1</div>
                    <RIGHT_ARROW stroke="white" className="hidden lg:block animate-spin translate-x-10 h-10 w-10 py-2" />
                    <DOWN_ARROW stroke="white" className="block lg:hidden animate-spin translate-y-10 h-10 w-10 px-2" />
                </div>
                <StageDetails stageDetails={rocketDetails.first_stage} />

                <div className=" flex lg:flex-row sm:flex-col xs:flex-col justify-center items-center xs:py-6">
                    <div className="rounded-full h-20 w-20 border  p-2 flex text-2xl justify-center items-center">2</div>
                    <RIGHT_ARROW stroke="white" className="hidden lg:block animate-spin translate-x-10 h-10 w-10 py-2" />
                    <DOWN_ARROW stroke="white" className="block lg:hidden animate-spin translate-y-10 h-10 w-10 px-2" />
                </div>
                <StageDetails stageDetails={rocketDetails.second_stage} />

            </div>

        </div>
    )
}
export default RocketDetails