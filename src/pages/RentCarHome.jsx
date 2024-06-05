import React from "react";
import Busqueda from "../components/Busqueda";
import InfoCar from "../components/InfoCar";

function RentCarHome() {
  return (
    <>
      <Busqueda />
      <section className="p-16 gap-6 grid grid-cols-3">
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia" imgCarro="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia" imgCarro="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia" imgCarro="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia" imgCarro="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia" imgCarro="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"/>
      </section>
    </>
  );
}

export default RentCarHome;
