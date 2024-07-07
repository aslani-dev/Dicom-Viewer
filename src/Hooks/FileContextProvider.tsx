import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface DicomContextType {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

// Create the context with initial values
export const DicomContext = createContext<DicomContextType>({
  file: undefined,
  setFile: () => {},
});

// Define the props interface for FileContextProvider component
interface DicomContextProviderProps {
  children: ReactNode;
}

function DicomContextProvider({ children }: DicomContextProviderProps) {
  const [file, setFile] = useState<File | undefined>();

  return (
    <DicomContext.Provider value={{ file, setFile }}>
      {children}
    </DicomContext.Provider>
  );
}

export default DicomContextProvider;
