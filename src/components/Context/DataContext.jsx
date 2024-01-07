import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("todo")) || [];
  const [row, setRow] = useState(localData);
  return (
    <DataContext.Provider value={{ row, setRow }}>
      {children}
    </DataContext.Provider>
  );
};
