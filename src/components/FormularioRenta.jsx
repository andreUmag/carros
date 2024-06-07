import React from "react";
import { Outlet, Link } from "react-router-dom";

const FormularioRenta = () => {
  return (
    <div className="p-5 gap-4 mt-2 bg-gray-50 w-96 rounded-xl translate-y-10">
      <h5 className="mb-2 text-xl text-left font-bold tracking-tight text-[#F24444]">
        Formulario de Renta
      </h5>
      <form className="max-w-sm mx-auto grid grid-cols-2 gap-4 mt-5">
        <input
          type="text"
          placeholder="Fecha Inicial"
          className="input input-bordered w-24 md:w-auto"
        />
        <input
          type="text"
          placeholder="Fecha Final"
          className="input input-bordered w-24 md:w-auto"
        />
        <input
          type="text"
          placeholder="Nombre"
          className="input input-bordered w-32 md:w-auto"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="input input-bordered w-32 md:w-auto"
        />
        <input
          type="text"
          placeholder="Cedula"
          className="input input-bordered w-32 md:w-auto"
        />
        <input
          type="text"
          placeholder="Direccion"
          className="input input-bordered w-32 md:w-auto"
        />
        <input
          type="text"
          placeholder="Telefono"
          className="input input-bordered w-32 md:w-auto"
        />
      </form>
      <div className="datein"></div>
      <Link to="/Rentado">
        <button className="btn hover:bg-[#465952] hover:text-white hover:shadow-none hover:border-none mt-5">
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
      </Link>
      <Outlet />
    </div>
  );
};

export default FormularioRenta;
