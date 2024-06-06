import React from "react";

const InfoCarCompleta = ({ubicacion, marca, modelo, kilometraje, velocidad, imagen}) => {
  return (
    <div className=" bg-white w-96 h-86 ml-36 border flex flex-col mt-20 rounded-2xl">
      <div>
        <img
          className="rounded-t-lg scale-75 translate-y-7 rounded-xl h-64 w-full"
          src={imagen}
          alt=""
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 flex gap-2">
            {modelo}
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ">
                {ubicacion}
              </span>
            </div>
          </h5>
        </div>
        <p className="mb-3 font-normal text-left text-gray-700 ">
          Este vehículo de la marca {marca} tiene un
          kilometraje de {kilometraje} Km, alcanza una velocidad maxima de{" "}
          {velocidad} Km/h.
        </p>
        <div>
          <h5 className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
            $20000
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InfoCarCompleta;
