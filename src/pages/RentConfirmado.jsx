import React from "react";
import { useLocation } from "react-router-dom";
import InfoRentaConfirmado from "../components/InfoRentaConfirmado";

function RentConfirmado() {
  const location = useLocation();
  const {
    nombre,
    apellido,
    cedula,
    direccion,
    telefono,
    modelo,
    precio,
    imgCarro,
    fechaInicial,
    fechaFinal,
  } = location.state || {};

  return (
    <>
      <section className="h-screen w-full items-center p-32 flex flex-col">
        <InfoRentaConfirmado
          nombre={nombre}
          apellido={apellido}
          direccion={direccion}
          telefono={telefono}
          fechaInicial={fechaInicial}
          fechaFinal={fechaFinal}
          estado="Rentado"
          modelo={modelo}
          precio={precio}
          img={imgCarro}
        />
      </section>
    </>
  );
}

export default RentConfirmado;
