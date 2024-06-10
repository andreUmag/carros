import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePickerComponent } from "./DateInForm";

const InfoCarCompleta = ({
  id,
  marca,
  modelo,
  precio,
  ubicacion,
  imgCarro,
  velocidad,
  kilometraje,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    direccion: "",
    telefono: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, cedula, direccion, telefono } = formData;

    if (!nombre || !apellido || !cedula || !direccion || !telefono) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    navigate("/Rentado", {
      state: {
        ...formData,
        modelo,
        precio,
        imgCarro,
      },
    });
  };

  return (
    <div className="flex flex-row gap-5">
      <div className=" bg-white w-96 h-86 ml-36  flex flex-col mt-24 rounded-2xl">
        <div className="rounded-xl h-64 w-80">
          <img
            className="rounded-t-lg scale-75 translate-y-12 object-cover ml-7"
            src={imgCarro}
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 flex gap-2">
              {modelo}
              <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-[#F23005] text-white text-xs font-semibold px-2.5 py-0.5 rounded ">
                  {ubicacion}
                </span>
              </div>
            </h5>
          </div>
          <p className="mb-3 font-normal text-left text-gray-700 ">
            Este vehículo de la marca {marca} tiene un kilometraje de {kilometraje} Km, alcanza una velocidad máxima de {velocidad} Km/h.
          </p>
          <div>
            <h5 className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
              ${precio}
            </h5>
          </div>
        </div>
      </div>

      <div className="p-14 gap-4 bg-white w-[500px] h-86 rounded-xl mt-24">
        <h5 className="mb-2 text-xl text-left font-bold tracking-tight text-[#D92B04]">
          Formulario de Renta
        </h5>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto grid grid-cols-2 gap-4 mt-5">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input input-bordered w-32 md:w-auto"
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="input input-bordered w-32 md:w-auto"
          />
          <input
            type="text"
            name="cedula"
            placeholder="Cedula"
            value={formData.cedula}
            onChange={handleChange}
            className="input input-bordered w-32 md:w-auto"
          />
          <input
            type="text"
            name="direccion"
            placeholder="Direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="input input-bordered w-32 md:w-auto"
          />
          <input
            type="text"
            name="telefono"
            placeholder="Telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="input input-bordered w-32 md:w-auto"
          />
          {error && <div className="col-span-2 text-red-500">{error}</div>}
          <button type="submit" className="btn hover:bg-[#731702] hover:text-white hover:shadow-none hover:border-none mt-5 col-span-2">
            Rentar
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoCarCompleta;
