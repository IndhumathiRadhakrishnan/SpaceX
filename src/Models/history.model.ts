export interface HistorySchema {
    id: string;
    links: {
        article: string;
    };
    title: string;
    event_date_utc: string;
    event_date_unix: number;
    details: string;
}