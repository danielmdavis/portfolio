'use client'
import { createContext, useContext } from 'react';

const AppContext = createContext({});

export function AppWrapper({ children }) {
  
  let globalState = {
    palate: 'dark'
  }

  return (
    <AppContext.Provider value={globalState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext)
}