import { useState } from 'react'
import RentCarHome from './pages/RentCarHome'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RentCarHome/>
    </>
  )
}

export default App
