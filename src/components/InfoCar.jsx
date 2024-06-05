import React from "react";

const InfoCar = ({ carro, precio, ubicacion }) => {
  return (
    <>
      <a
        href="#"
        class="grid grid-cols-3 p-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl w-80 h-43"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"
          alt=""
        />
        <div class="flex flex-col justify-between p-2 leading-normal">
        <p class="mb-1 font-light text-gray-700">
            {ubicacion}
          </p>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {carro}
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            {precio}
          </p>
        </div>
        <button className="btn ml-6">
            Rentar
        </button>
      </a>
    </>
  );
};

export default InfoCar;
