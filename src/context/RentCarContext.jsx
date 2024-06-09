import React, { createContext } from 'react'
import { ApiRentCar } from "../service/ApiRentCar";

const RentCarContext = createContext();

const useRentCar = () => useContext(RentCarContext);

const RentCarProvider = ({ children }) => {
    const RentCar = ApiRentCar();

  return (
    <RentCarContext.Provider value={{...RentCar}}>
        {children}
    </RentCarContext.Provider>
  )
}


export { useRentCar , RentCarProvider}
