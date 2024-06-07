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

  const handleBuscar = () => {
    const resultados = carros.filter(
      (car) =>
        car.locacion.toLowerCase() === locacion.toLowerCase() &&
        car.fechaDisponible.includes(fechaInicial) &&
        car.fechaDisponible.includes(fechaFinal)
    );
    setBuscar(resultados);
  };

  return (
    <div className="navbar rounded-lg bg-base-100 bg-transparent p-8 w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-[#F24444]">Renta de Carros</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Localizacion"
            className="input input-bordered w-24 md:w-auto"
            value={locacion}
            onChange={(e) => setLocacion(e.target.value)}
          />
        </div>
        <DatePickerComponent/>
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Fecha Inicial"
            className="input input-bordered w-24 md:w-auto"
            value={fechaInicial}
            onChange={(e) => setFechaInicial(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Fecha Final"
            className="input input-bordered w-24 md:w-auto"
            value={fechaFinal}
            onChange={(e) => setFechaFinal(e.target.value)}
          />
        </div> */}
      </div>
      <button className="btn  bg-[#465952] text-gray-400 ml-6 hover:bg-green-700 hover:text-white" onClick={handleBuscar}>
        Buscar
      </button>
    </div>
  );
};

export default Busqueda;
