import React, { useState } from "react";
import { DateIn } from "./DateIn";

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
  const [locacion, setLocacion] = useState('');
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [buscar, setBuscar] = useState([]);

  const handleSelectChange = (e) => {
    setLocacion(e.target.value);
  };

  const handleDateChange = (selected) => {
    if (selected?.from && selected?.to) {
      setFechaInicial(selected.from.toISOString().split('T')[0]);
      setFechaFinal(selected.to.toISOString().split('T')[0]);
    }
  };

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
    <div className="navbar rounded-lg bg-base-100 bg-transparent p-8 w-full mb-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">The Auto Gallery</a>
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
              <option value="Bogota">Bogota</option>
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
      <div>
        {buscar.length > 0 ? (
          <ul>
            {/* {buscar.map(car => (
              <li key={car.id}>{car.nombre} - {car.locacion}</li>
            ))} */}
          </ul>
        ) : (
          console.log("No hay resultados")
        )}
      </div>
    </div>
  );
};

export default Busqueda;