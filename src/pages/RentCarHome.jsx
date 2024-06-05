import React from "react";
import Busqueda from "../components/Busqueda";
import InfoCar from "../components/InfoCar";

function RentCarHome() {
  return (
    <>
      <Busqueda />
      <section className="p-16 gap-6 grid grid-cols-3">
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
        <InfoCar carro="Nissan 2024" precio="$20.000" ubicacion="Vosnia"/>
      </section>
    </>
  );
}

export default RentCarHome;
