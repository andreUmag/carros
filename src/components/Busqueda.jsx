import React, { useState } from "react";
import axios from "axios";
import { DateIn } from "./DateIn";

const Busqueda = ({ setCarros, setLoading }) => {
  const [locacion, setLocacion] = useState("");
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const handleSelectChange = (e) => {
    setLocacion(e.target.value);
  };

  const handleDateChange = (selected) => {
    if (selected?.from && selected?.to) {
      setFechaInicial(selected.from.toISOString());
      setFechaFinal(selected.to.toISOString());
    }
  };

  const handleBuscar = () => {
    if (!locacion || !fechaInicial || !fechaFinal) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);
    console.log("Parametros de búsqueda:", {
      locacion,
      fechaInicial,
      fechaFinal,
    });

    axios
      .get("http://localhost:8080/api/v1/cars/available", {
        params: {
          ciudad: locacion,
          fechaInicio: fechaInicial,
          fechaFinal: fechaFinal,
        },
      })
      .then((response) => {
        setCarros(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the car data:", error);
        setLoading(false);
      });
  };

  const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Auto Gallery";
    }, 8000);
  };

  textLoad();

  return (
    <div className="navbar rounded-lg bg-base-100 bg-transparent p-6 -translate-x-32 w-screen mb-10 backdrop-blur-sm shadow-2xl">
      <div className="flex-1 flex">
        <div className="containerText bg-[#1e1e1e] block p-2 rounded-xl shadow-2xl">
          <span className="text first-text ml-8">The </span>
          <span className="text sec-text mr-28"></span>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <form>
            <select
              id="countries"
              className="border text-gray-900 text-sm rounded-lg focus:ring-[#F23005] focus:border-[#dfdfdf] block w-full p-3.5"
              value={locacion}
              onChange={handleSelectChange}
            >
              <option className="bg-[#f2444479]" value="">
                Ubicacion
              </option>
              <option value="Bogota">Cartagena</option>
              <option value="Santa Marta">Santa Marta</option>
              <option value="Barranquilla">Barranquilla</option>
            </select>
          </form>
        </div>
        <DateIn onDateChange={handleDateChange} />
      </div>
      <button
        className="btn bg-[#D92B04] text-white ml-6 hover:bg-[#F23005] border-none"
        onClick={handleBuscar}
      >
        Buscar
      </button>
    </div>
  );
};

export default Busqueda;
