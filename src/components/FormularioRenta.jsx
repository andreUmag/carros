import React from "react";
import { Outlet, Link } from "react-router-dom";


const FormularioRenta = () => {
  return (
    <div className="p-5 gap-4 mt-2 bg-gray-50 w-96 rounded-xl translate-y-2">
      <form class="max-w-sm mx-auto flex flex-col gap-4">
        <h5 class="mb-2 text-xl text-left font-bold tracking-tight text-gray-900">
          Formulario de Renta
        </h5>
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
      <Link to="/Rentado">
      <button className="btn hover:bg-blue-400 hover:text-white hover:shadow-none hover:border-none mt-5">
        Rentar
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
