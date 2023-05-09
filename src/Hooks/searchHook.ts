import { useEffect, useState } from "react";
interface ISearchData<T> {
    key: keyof T;
    searchDetails: T[] | undefined;
  }
  
  export const useSearchHook = <T>(props: ISearchData<T>) => {
    const { key, searchDetails = [] } = props; // add a default value to searchData
    const [resultantSearch, setQueryResultantSearch] = useState<T[]>([]);
    const [searchLoading, setSearchLoading] = useState(false)

    useEffect(()=>{
      if(searchDetails && searchDetails.length > 0) {
          setQueryResultantSearch(searchDetails)
          setSearchLoading(true)
      }
    },[searchDetails])
  
    function handleSearchResult(results: string) {
        const filteredResults = searchDetails?.filter((item: T) => {
          const value = item[key];
          if (typeof value === "string") {
            return value.toLocaleLowerCase().includes(results.toLocaleLowerCase());
          }
          return false;
        });
        setQueryResultantSearch(filteredResults);
      }
  
    return { resultantSearch, handleSearchResult, searchLoading };
  };