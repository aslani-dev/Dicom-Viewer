import React, { createContext, useState } from "react";
export const FileContext = createContext();

function FileContextProvider({ children }) {
  const [file, setFile] = useState();
  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
}

export default FileContextProvider;
