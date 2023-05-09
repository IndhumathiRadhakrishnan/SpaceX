import { useEffect, useState } from "react";
interface ISearchData<T> {
    key: keyof T;
    searchDetauls: T[] | undefined;
  }
  
  export const useSearchHook = <T>(props: ISearchData<T>) => {
    const { key, searchDetauls = [] } = props; // add a default value to searchData
    const [resultantSearch, setQueryResultantSearch] = useState<T[]>([]);

    useEffect(()=>{
      if(searchDetauls && searchDetauls.length > 0) {
          setQueryResultantSearch(searchDetauls)
      }
    },[searchDetauls])
  
    function handleSearchResult(results: string) {
        const filteredResults = searchDetauls?.filter((item: T) => {
          const value = item[key];
          if (typeof value === "string") {
            return value.toLocaleLowerCase().includes(results.toLocaleLowerCase());
          }
          return false;
        });
        setQueryResultantSearch(filteredResults);
      }
  
    return { resultantSearch, handleSearchResult };
  };