import { RocketSchema } from "../../Models/rocket.model"

function RocketConfiguration({ rocketDetails, details }: { rocketDetails: RocketSchema, details: boolean }) {
    return (
        <div className="flex flex-col gap-y-10 mx-20">
            <div className="text-6xl">{details ? rocketDetails.name : "Payload Configurations"}</div>
            <div className="text-xl">{details ? rocketDetails.description : rocketDetails.company}</div>

            <div className="flex flex-col gap-4 ">
                {details &&
                    <>
                        <div className="flex flex-row justify-between">
                            <span className="">Vechile Height</span>
                            <span className="">{rocketDetails.height.feet}/ft {rocketDetails.height.meters}/m</span>
                        </div><hr />

                        <div className="flex flex-row justify-between">
                            <span className="">Vechile Diameter</span>
                            <span className="">{rocketDetails.diameter.feet}/ft {rocketDetails.diameter.meters}/m</span>
                        </div><hr />

                        <div className="flex flex-row justify-between">
                            <span className="">Vechile Weight</span>
                            <span className="">{rocketDetails.mass.kg}/kg {rocketDetails.mass.lb}/lb</span>
                        </div><hr />

                        <div className="flex flex-row justify-between">
                            <span className="">Country Launched</span>
                            <span className="">{rocketDetails.country}</span>
                        </div><hr />

                        <div className="flex flex-row justify-between">
                            <span className="">Launch Cost</span>
                            <span className="">{rocketDetails.cost_per_launch}</span>
                        </div>

                    </>
                }


                {
                    !details && rocketDetails.payload_weights.slice(0, 1).map((payload: any, index: number) =>
                        <>
                            <div className="flex flex-row justify-between">
                                <span className="">Payoad ID-{index + 1}</span>
                                <span className="">{payload.id} </span>
                            </div><hr />
                            <div className="flex flex-row justify-between">
                                <span className="">Payload Name-{index + 1}</span>
                                <span className="">{payload.name}</span>
                            </div><hr />
                            <div className="flex flex-row justify-between">
                                <span className="">Payload Mass-{index + 1}</span>
                                <span className="">{payload.kg}/kg {payload.lb}/lb</span>
                            </div><hr />

                        </>
                    )

                }
                {!details && <><div className="flex flex-row justify-between">
                    <span className="">Success Rate</span>
                    <span className="">{rocketDetails.success_rate_pct}</span>
                </div><hr /><div className="flex flex-row justify-between">
                        <span className="">Load Type</span>
                        <span className="">{rocketDetails.type}</span>
                    </div>
                </>
                }
            </div>
        </div>
    )
}
export default RocketConfiguration