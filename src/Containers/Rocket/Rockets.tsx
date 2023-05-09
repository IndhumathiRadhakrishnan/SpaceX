import { useNavigate } from "react-router-dom";
import ImageHolder from "../../Components/ImageHolder"
import { RocketSchema } from "../../Models/rocket.model"
import { useRocketHook } from "../../Hooks/rocketHook";
import Loading from "../../Components/Loading";
import NothingFound from "../../Components/NothingFound";
import SearchBar from "../../Components/SearchBar";
import { useSearchHook } from "../../Hooks/searchHook";

function Rockets() {
    const navigate = useNavigate();
    const { rocketData, rocketLoading } = useRocketHook({})
    const { resultantSearch, handleSearchResult, searchLoading } = useSearchHook({ searchDetails: rocketData, key: 'name' });

    if (rocketLoading) {
        return (<Loading />)
    }
    if (!resultantSearch && searchLoading) {
        return (<NothingFound />)
    }
    return (
        <div className="flex flex-col w-full h-full text-white gap-y-2">
            <SearchBar onSearchResult={handleSearchResult} />
            <div className="grid grid-cols-1 md:grid-cols-2 mx-20 gap-20 ">

                {resultantSearch?.map((rockets: RocketSchema) =>
                    <div className="flex flex-col gap-y-2">
                        <ImageHolder className="w-full h-[20rem]  md:h-[26rem]  object-cover" image={rockets.flickr_images[0] ? rockets.flickr_images[0] : undefined} />
                        <div className="text-2xl">{rockets.first_flight}</div>
                        <div className="flex flex-row gap-4 text-3xl ">
                            <span className="text-3xl">{rockets.name} </span>
                        </div>

                        <div className="flex flex-row">
                            <button className="learn-more-button" onClick={() => { navigate(`/rockets/${rockets.id}`) }}>Learn More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}
export default Rockets