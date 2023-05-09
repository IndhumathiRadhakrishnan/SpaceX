import { useEffect, useState } from "react"
import { HistorySchema } from "../Models/history.model"
import { useGetHistoryQuery } from "../Services/historyApi"

export const useHistoryHook = () => {
    const { data: historyData, isLoading: historyLoading} = useGetHistoryQuery()

    return {
        historyData, historyLoading
    }
}