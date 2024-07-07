import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface FileContextType {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

// Create the context with initial values
export const FileContext = createContext<FileContextType>({
  file: undefined,
  setFile: () => {},
});

// Define the props interface for FileContextProvider component
interface FileContextProviderProps {
  children: ReactNode;
}

function FileContextProvider({ children }: FileContextProviderProps) {
  const [file, setFile] = useState<File | undefined>();

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
}

export default FileContextProvider;
