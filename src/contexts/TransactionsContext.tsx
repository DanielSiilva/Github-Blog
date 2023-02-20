import {createContext, ReactNode, useState} from 'react';






interface TransactionContextType {
  
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  



  

  return (
    <TransactionsContext.Provider value={{
     
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}