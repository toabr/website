import { createContext, useContext } from "react";
import useFetch from "./useFetch";

// register the context
const DataContext = createContext({});

// export a custom context provider
export function DataProvider({ children }) {
  const url = `${process.env.REACT_APP_API_URL}/api/term/`
  const { status, data, error } = useFetch(url)

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'fetching') {
  }

  if (status === 'fetched') {
    // console.log('tags', data)
  }

  // return a context object
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

// export a custom hook to use this specific context
export function useDataContext() {
  return useContext(DataContext);
}