import { RocketSchema } from "../Models/rocket.model";
import { allApis } from "./allApi";


export const rocketsApi = allApis.injectEndpoints({
    overrideExisting: false,

    endpoints: (builder) => ({
        getRockets: builder.query<RocketSchema[], void>({
            query: () => "rockets",
            providesTags: ["Rockets"],

    }),
    getRocketById: builder.query({
        query: (id: string) => `rockets/${id}`,
        providesTags: ["Rockets"],

})
})
});
export const { useGetRocketsQuery, useGetRocketByIdQuery } = rocketsApi;