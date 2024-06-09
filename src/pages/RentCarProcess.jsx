import React from "react";
import { useLocation } from "react-router-dom";
import InfoCarCompleta from "../components/InfoCarCompletaAndFormulario";
import { Outlet, Link } from "react-router-dom";

function RentCar() {
  const location = useLocation();
  const {
    id,
    marca,
    modelo,
    precio,
    ubicacion,
    imgCarro,
    velocidad,
    kilometraje,
  } = location.state || {};

  return (
    <>
      <section className="flex flex-row">
        <section className="w-full h-dvh basis-1/2 p-2 translate-x-32 items-center">
          <InfoCarCompleta
            id={id}
            marca={marca}
            precio={precio}
            ubicacion={ubicacion}
            imgCarro={imgCarro}
            modelo={modelo}
            velocidad={velocidad}
            kilometraje={kilometraje}
          />
        </section>
        <section className="w-full h-dvh pl-36">
          <div className="p-2 flex flex-row-reverse">
            <Link to="/" className="p-2 flex flex-row-reverse">
              <button className="btn btn-ghost mt-5 bg-[#465952] hover:bg-green-700 text-white">
                Regresar
              </button>
            </Link>
          </div>
          
        </section>
      </section>
      <Outlet />
    </>
  );
}

export default RentCar;
