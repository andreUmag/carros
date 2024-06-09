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
  } = location.state || {};

  return (
    <>
      <section className="h-screen w-full items-center p-32 flex flex-col">
        <InfoRentaConfirmado
          nombre={nombre}
          apellido={apellido}
          direccion={direccion}
          telefono={telefono}
          fechaInicial="13-01-2024"
          fechaFinal="20-01-2024"
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
