import { createContext, useState, useContext, useMemo } from 'react';

const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [appState, setAppState] = useState(null);
  const contextValue = useMemo(() => {
    return [appState, setAppState];
  }, [appState, setAppState]);
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
