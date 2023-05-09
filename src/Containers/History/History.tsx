import { HistorySchema } from "../../Models/history.model"
import { formatDateToTimezone, formatTimeToTimezone } from "../../Utils/dateTime"
import { ReactComponent as CALENDER } from '../../Assets/monthly-calendar-svgrepo-com.svg'
import LearnMore from "../../Components/LearnMore"
import { useHistoryHook } from "../../Hooks/historyHook"
import Loading from "../../Components/Loading"
import NothingFound from "../../Components/NothingFound"
import SearchBar from "../../Components/SearchBar"
import { useSearchHook } from "../../Hooks/searchHook"


function History() {

    const { historyData, historyLoading} = useHistoryHook()
    const { resultantSearch, handleSearchResult } = useSearchHook({ searchDetails: historyData, key: 'title' });

    if (historyLoading) {
        return (<Loading />)
    }
    if (historyData &&  resultantSearch.length <=0 && !historyLoading) {
        return (<NothingFound />)
    }

    return (
        <div className="flex flex-col  h-full w-full text-white gap-y-2">
            <SearchBar searchData={resultantSearch} onSearchResult={handleSearchResult} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-20 content-center justify-center ">
                {resultantSearch?.map((history: HistorySchema) =>
                    <div className="flex flex-col gap-y-2 items-center w-full p-4 text-center hover:bg-zinc-400 hover:bg-opacity-20 rounded-lg shadow sm:p-8 hover:scale-105 transition-all duration-300 group" >   
                    <div className="text-3xl line-clamp-1">{history.title}</div>
                        <div className="flex flex-row  items-center gap-x-2">
                            <CALENDER stroke="white" className="h-4 w-4 " />
                            <div className="font-normal">{formatDateToTimezone(history.event_date_utc) + '-' + formatTimeToTimezone(history.event_date_utc)}</div>
                        </div>
                            <span className="line-clamp-2">{history.details}</span>
                            <LearnMore navigation={history.links.article} appNavigate={false} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default History