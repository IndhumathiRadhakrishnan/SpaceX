
function StageDetails({  stageDetails }: {  stageDetails: any }) {
  
    return (
            <div className="flex flex-col rounded-lg border-white border px-2 py-3 gap-2 justify-between">

                    <div className="flex flex-row justify-between ">
                        <span>Engine</span><span className="">{stageDetails.engines}</span>
                    </div>

                    <div className="flex flex-row justify-between  ">
                        <span>Fuel Amount In Tons</span><span className="">{stageDetails.fuel_amount_tons}</span>
                    </div>

                    <div className="flex flex-row justify-between  ">
                        <span>Burning Time In Seconds</span><span className="">{stageDetails.burn_time_sec}/s</span>
                    </div>

                    {stageDetails.thrust_sea_level &&
                     <div className="flex flex-row justify-between ">
                        <span className="">Thrust Sea Level</span><span className="text-end">{stageDetails.thrust_sea_level.kN + "kN (" + stageDetails.thrust_sea_level.lbf + ")"}</span>
                    </div>
                    }

                    {stageDetails.thrust_vacuum && 
                    <div className="flex flex-row justify-between  ">
                        <span>Thrust Vaccum Level</span><span className="text-end">{stageDetails.thrust_vacuum.kN + "kN (" + stageDetails.thrust_vacuum.lbf + ")"}</span>
                    </div>
                    }

                    <div className="flex flex-row justify-between  ">
                        <span>Reusable</span><span className="">{stageDetails.reusable ? "YES" : "NO"}</span>
                    </div>

                    {stageDetails.thrust &&
                        <div className="flex flex-row justify-between  ">
                            <span>Second Thrust</span><span className="">{stageDetails.thrust.kN + "kN (" + stageDetails.thrust.lbf + ")"}</span>
                        </div>
                    }

                
            </div>
    )
}

export default StageDetails