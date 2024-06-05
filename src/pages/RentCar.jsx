import React from "react";
import InfoCarCompleta from "../components/InfoCarCompleta";
import FormularioRenta from "../components/FormularioRenta";

function RentCar() {
  return (
    <>
      <section className="flex flex-row">
        <section className="w-full h-dvh basis-1/2 p-2 translate-x-20 items-center">
          <InfoCarCompleta ubicacion="Mamatoco" marca="Tesla" modelo="Performance 2024" kilometraje="1.224" velocidad="360" imagen="https://png.pngtree.com/background/20231031/original/pngtree-luxury-electric-sports-car-white-background-isolated-3d-render-picture-image_5812691.jpg"/>
        </section>
        <section className="w-full h-dvh pl-36">
          <div className="p-2 flex flex-row-reverse">
            <button className="btn btn-ghost mt-5">Regresar</button>
          </div>
          <FormularioRenta/>
        </section>
      </section>
    </>
  );
}

export default RentCar;
