import React from "react";

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
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-full max-w-sm bg-white  rounded-lg ">
        <div className="card w-96 bg-base-100 ">
          <figure>
            <img className="p-5" src={img} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {modelo}
              <div className="badge badge-accent">{estado}</div>
            </h2>
            <p className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
              ${precio}
            </p>
          </div>
        </div>
      </figure>

      <div className="card-body w-96">
        <p className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
          Rentado por <br />
          <p className="text-blue-400">{nombre} {apellido}</p>
        </p>

        <ol class="items-center sm:flex">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {fechaInicial}
              </time>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {fechaFinal}
              </time>
            </div>
          </li>
        </ol>

        <p className=" text-xl text-left font-bold tracking-tight text-gray-900">
          Datos de la persona
        </p>
        <div className="justify-start grid text-left -translate-y-10">
          <li>{direccion}</li>
          <li>{telefono}</li>
        </div>
        <button className="btn hover:bg-blue-400 hover:text-white hover:shadow-none hover:border-none">
          Volver
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
      </div>
    </div>
  );
};

export default InfoRentaConfirmado;
