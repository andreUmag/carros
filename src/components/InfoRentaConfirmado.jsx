import React from "react";
import { Outlet, Link } from "react-router-dom";

const InfoRentaConfirmado = ({
  img,
  nombre,
  apellido,
  direccion,
  telefono,
  modelo,
  precio,
  fechaFinal,
  fechaInicial,
  estado,
}) => {
  return (
    <div className="card lg:card-side bg-base-100 -translate-y-5">
      <figure className="w-full max-w-sm bg-white rounded-lg ">
        <div className="card w-96 bg-base-100 ">
          <figure>
            <img className="p-5 object-cover" src={img} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {modelo}
              <div className="badge badge-warning">{estado}</div>
            </h2>
            <p className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
              {precio}
            </p>
          </div>
        </div>
      </figure>

      <div className="card-body w-96">
        <div className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900 mt-8">
          Rentado por <br />
          <div className="text-[#F24444] mb-2 text-3xl text-left font-bold tracking-tight">
            {nombre} {apellido}
          </div>
        </div>

        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#ffeeed] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-[#F24444] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {fechaInicial}
              </time>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#ffeeed] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-[#F24444]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {fechaFinal}
              </time>
            </div>
          </li>
        </ol>

        <p className=" text-xl text-left font-bold tracking-tight text-gray-900">
          Datos de la persona
        </p>
        <div className="justify-start grid text-left ">
          <li>{direccion}</li>
          <li>{telefono}</li>
        </div>
        <Link to="/" className="w-full">
          <button className="btn hover:bg-[#465952] hover:text-white hover:shadow-none hover:border-none mt-10">
            Seguir rentando
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default InfoRentaConfirmado;
