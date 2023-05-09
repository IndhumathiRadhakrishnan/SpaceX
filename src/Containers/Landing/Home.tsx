import ImageHolder from "../../Components/ImageHolder"
import LearnMore from "../../Components/LearnMore"
import { useLandingHook } from "../../Hooks/landingHook"
import { LaunchSchema } from "../../Models/launch.model"

function Home(){

    const { imageLoadedData} =  useLandingHook()
    
    return (
        <div className="flex flex-col w-full">
            <div className=" flex items-center justify-center text-black relative h-[100vh]">
                <ImageHolder className="object-cover h-full w-full z-0 absolute" image={require('../../Assets/107763.jpg')} />
                <div className="absolute">Launches</div>
                <ImageHolder className="absolute h-96 w-96 left-0 transition-all animate-floating" image={require('../../Assets/shadow.png')}/>
       
            </div>
            {imageLoadedData && imageLoadedData.slice(0, 4).map((launch: LaunchSchema) =>
                <div className="relative h-[100vh] w-full">
                <ImageHolder className="w-full h-full object-cover" image={launch.links.flickr.original[0]} />
                <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center">
                  <div className="text-white text-4xl font-bold">{launch.name}</div>
                  <div className="text-white text-2xl">{launch.upcoming ? "Upcoming" : "Recent"}</div>
                  <LearnMore  navigation={`/launches/${launch.id}`} appNavigate={true}/>
                </div>
              </div>
            )
            }
        </div>
    )
}
export default Home