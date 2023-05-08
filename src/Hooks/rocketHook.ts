import { useGetRocketByIdQuery, useGetRocketsQuery } from "../Services/rocketsApi"

export const useRocketHook = ({id} : {id?: string }) => {
    const { data: rocketData, isLoading: rocketLoading } = useGetRocketsQuery()
    const { data: rocketDetails, isLoading: rocketDetailsLoading } = useGetRocketByIdQuery(id ? id : '', { skip: !id })

    return {
        rocketData, rocketLoading, rocketDetails, rocketDetailsLoading
    }
}