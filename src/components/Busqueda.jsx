import React, { useState } from "react";
import { DatePickerComponent } from "./DateIn";

const carros = [
  {
    id: 1,
    nombre: "Toyota Padro",
    locacion: "Bogota",
    fechaDisponible: ["2024-06-10", "2024-06-15"],
  },
  {
    id: 2,
    nombre: "Honda Civic",
    locacion: "Santa Marta",
    fechaDisponible: ["2024-06-11", "2024-06-16"],
  },
  {
    id: 3,
    nombre: "Ford Mustang",
    locacion: "Barranquilla",
    fechaDisponible: ["2024-06-12", "2024-06-17"],
  },
];

const Busqueda = () => {
  const [locacion, setLocacion] = useState("");
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [buscar, setBuscar] = useState([]);
  const [error, setError] = useState("");

  const handleBuscar = () => {
    if (new Date(fechaInicial) > new Date(fechaFinal)) {
      setError("La fecha inicial no puede ser posterior a la fecha final.");
      return;
    }

    setError("");
    const resultados = carros.filter(
      (car) =>
        car.locacion.toLowerCase() === locacion.toLowerCase() &&
        car.fechaDisponible.includes(fechaInicial) &&
        car.fechaDisponible.includes(fechaFinal)
    );
    setBuscar(resultados);
  };

  return (
    
    <div className="navbar bg-base-100 mt-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Renta de Carros</a>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <div className="flex-none gap-2">
        <div className="form-control">
          <select
            className="select select-bordered border-gray-300 rounded-xl w-full max-w-xs"
            value={locacion}
            onChange={(e) => setLocacion(e.target.value)}
          >
            <option value="" disabled>
              Localización
            </option> 
            <option value="Bogota">Bogota</option>
            <option value="Santa Marta">Santa Marta</option>
            <option value="Barranquilla">Barranquilla</option>
          </select>
        </div>
        <DatePickerComponent dateInfo="Fecha Inicial" onDateChange={setFechaInicial} />
        <DatePickerComponent dateInfo="Fecha Final" onDateChange={setFechaFinal} />
      </div>
      <button className="btn ml-6" onClick={handleBuscar}>
        Buscar
      </button>
      
      <ul>
        {buscar.map((car) => (
          <li key={car.id}>{car.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Busqueda;
