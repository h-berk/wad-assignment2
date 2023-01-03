import React, { useState, createContext, useEffect } from "react";
import { getShows } from "./api/movie-api";

export const ShowsContext = createContext(null);

const ShowsContextProvider = (props) => {
  const [shows, setShows] = useState( [] );
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getShows().then((result) => {
      setShows(result)
    }); 
  }, []);

  return (
    <ShowsContext.Provider
      value={{
        shows,
        setAuthenticated,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;
