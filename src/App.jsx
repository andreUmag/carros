import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RentCarHome from "./pages/RentCarHome";
import RentCar from "./pages/RentCarProcess";
import RentConfirmado from "./pages/RentConfirmado";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<RentCarHome />} />
        <Route path="Rentar/:id" element={<RentCar />} />
        <Route path="Rentado" element={<RentConfirmado />} />
      </Routes>
    </>
  );
}

export default App;
