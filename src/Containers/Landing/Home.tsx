import ImageHolder from "../../Components/ImageHolder"
import LearnMore from "../../Components/LearnMore"
import { useLandingHook } from "../../Hooks/landingHook"
import { LaunchSchema } from "../../Models/launch.model"

function Home(){

    const { imageLoadedData} =  useLandingHook()
    
    return (
        <div className="flex flex-col w-full">
            <div className=" flex items-center justify-center text-black relative h-[100vh]">
                <ImageHolder className="object-cover h-full w-full z-0 absolute" image={require('../../Assets/landing.jpg')} />

                <div className="absolute left-6 top-48">
                    <div className="text-4xl text-white inline-block border border-gray-400 py-1 px-4 mb-4">STARSHIPS</div>
                    <div className="text-white py-2 animate-typing">Touching down among the stars, Another leap for space exploration service to moon mars and beyond!</div>
                    <a href="#explore" className="text-white py-2 animate-bounce block underline">Explore</a>
                </div>
            </div>

            {imageLoadedData && imageLoadedData.slice(0, 4).map((launch: LaunchSchema) =>
                <div id="explore" className="relative h-[100vh] w-full">
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