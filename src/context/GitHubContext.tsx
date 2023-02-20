import {
    createContext,
    ReactNode,
    useState,
} from 'react'




  

  
interface GitHubContextType {

}
  
export const GitHubContext = createContext({} as GitHubContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}
  
  export function GitHubContextProvider({ children }: OrderContextProviderProps) {
   
  
    
    return (
      <GitHubContext.Provider
        value={{
         
        }}
      >
        {children}
      </GitHubContext.Provider>
    )
  }
  