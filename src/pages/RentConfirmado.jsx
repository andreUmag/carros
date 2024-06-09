import React from "react";
import InfoRentaConfirmado from "../components/InfoRentaConfirmado";

function RentConfirmado() {
  const location = useLocation();
  const {
    id,
    modelo,
    precio,
    imgCarro,
  } = location.state || {};

  return (
    <>
      <section className="h-screen w-full items-center p-32 flex flex-col">
        <InfoRentaConfirmado
          apellido="Torres"
          estado="Rentado"
          direccion="Calle 35h #11-112"
          telefono="3113112234"
          fechaInicial="13-01-2024"
          fechaFinal="20-01-2024"
          nombre="Geronimo"
          precio={precio}
          modelo={modelo}
          img={imgCarro}
        />
      </section>
    </>
  );
}

export default RentConfirmado;
