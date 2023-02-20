import {
    createContext,
    ReactNode,
    useState,
} from 'react'




  

  
interface OrderContextType {

}
  
export const OrderContext = createContext({} as OrderContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}
  
  export function OrderContextProvider({ children }: OrderContextProviderProps) {
   
  
    
    return (
      <OrderContext.Provider
        value={{
         
        }}
      >
        {children}
      </OrderContext.Provider>
    )
  }
  