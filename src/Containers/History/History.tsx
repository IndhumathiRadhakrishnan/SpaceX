import { HistorySchema } from "../../Models/history.model"
import { useGetHistoryQuery } from "../../Services/historyApi"
import { formatDateToTimezone, formatTimeToTimezone } from "../../Utils/dateTime"
import { ReactComponent as CALENDER } from '../../Assets/monthly-calendar-svgrepo-com.svg'

function History(){
    const {data : historyData} =  useGetHistoryQuery()
    return (
        <div className="bg-black h-full w-full text-white">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-20 content-center justify-center ">
            {historyData?.map((history: HistorySchema) => 
            <div className="flex flex-col gap-4 hover:px-4 hover:py-4 cursor-default hover:bg-slate-100 hover:bg-opacity-50 hover:rounded-lg">
            <div className="text-4xl">{history.title}</div>
            <div className="flex flex-row">
            <CALENDER stroke="white" className="h-10 w-10" />
            <div className="text-3xl">{formatDateToTimezone(history.event_date_utc) + '-' + formatTimeToTimezone(history.event_date_utc)}</div>
            </div>
            <div className="text-xl justify-center line-clamp-3">{history.details}</div>
        </div>
            
            )}
        </div>
        </div>

   
    )

}

export default History