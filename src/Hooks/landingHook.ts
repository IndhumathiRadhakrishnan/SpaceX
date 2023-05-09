
import { useEffect, useState } from "react"
import {  useGetLaunchesQuery } from "../Services/launchesApi"
import { LaunchSchema } from "../Models/launch.model"


export const useLandingHook = () => {
    const { data: launchData, isLoading: launchLoading} = useGetLaunchesQuery()
    const [imageLoadedData, setImageLoadedData] =  useState<LaunchSchema[]>()

    useEffect(()=>{
        if(launchData){
            const launchesWithOriginalImages = launchData?.filter((launch) => {
                return launch.links.flickr?.original.length > 0; // Only include if flickr.original is truthy
              });
              setImageLoadedData(launchesWithOriginalImages)
        }
    },[launchData])

    return {
        launchData, launchLoading, imageLoadedData
    }
}