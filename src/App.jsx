import { useState } from 'react'
import RentCarHome from './pages/RentCarHome'
import "./App.css"
import RentCar from './pages/RentCar'
import RentConfirmado from './pages/RentConfirmado'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RentCar/>
      {/* <RentCarHome/> */}
      {/* <RentConfirmado/> */}
    </>
  )
}

export default App
