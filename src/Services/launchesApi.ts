import { allApis } from "./allApi";
import { LaunchSchema } from "../Models/launch.model";

export const launchesApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getLaunches: builder.query<LaunchSchema[], void>({
            query: () => "launches",
            providesTags: ["Launches"],
        }),
        getLaunchById: builder.query<LaunchSchema, any>({
            query: (id: string) => `launches/${id}`,
            providesTags: ["Launches"],
        })
    }),
});

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = launchesApi;