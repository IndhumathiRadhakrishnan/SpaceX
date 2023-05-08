import { useGetLaunchByIdQuery, useGetLaunchesQuery } from "../Services/launchesApi"

export const useLaunchHook = ({id} : {id?: string }) => {
    const { data: launchData, isLoading: launchLoading } = useGetLaunchesQuery()
    const { data: launchDetails, isLoading: launchDetailsLoading } = useGetLaunchByIdQuery(id ? id : '', { skip: !id })

    return {
        launchData, launchLoading, launchDetails, launchDetailsLoading
    }
}