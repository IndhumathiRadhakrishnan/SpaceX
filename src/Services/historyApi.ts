import { allApis } from "./allApi";
import { HistorySchema } from "../Models/history.model";

export const historyApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getHistory: builder.query<HistorySchema[], void>({
            query: () => "history",
            providesTags: ["History"],
        })
    }),
});

export const { useGetHistoryQuery } = historyApi;