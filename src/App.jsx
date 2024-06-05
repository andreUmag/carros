import { useState } from 'react'
import RentCarHome from './pages/RentCarHome'
import "./App.css"
import RentCar from './pages/RentCar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RentCar/>
      {/* <RentCarHome/> */}
    </>
  )
}

export default App
