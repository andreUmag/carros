import React from "react";

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
  
  return (
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
              <span className="bg-[#F2A9A2] text-[#F24444] text-xs font-semibold px-2.5 py-0.5 rounded ">
                {ubicacion}
              </span>
            </div>
          </h5>
        </div>
        <p className="mb-3 font-normal text-left text-gray-700 ">
          Este vehículo de la marca {marca} tiene un kilometraje de
          {kilometraje} Km, alcanza una velocidad maxima de {velocidad} Km/h.
        </p>
        <div>
          <h5 className="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
            {precio}
          </h5>
        </div>
      </div>
    </div>
    


    
  );
};

export default InfoCarCompleta;
