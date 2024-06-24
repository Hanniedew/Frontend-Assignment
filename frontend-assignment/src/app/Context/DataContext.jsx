// DataContext.js to store the database and to make dynamic changes to the database (e.g. adding).
import React, { createContext, useState } from "react";
import data from "../data.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState(data);

  const addData = (newData) => {
    setState((prevState) => [...prevState, newData]);
  };

  return (
    <DataContext.Provider value={{ data: state, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
