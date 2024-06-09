import React, { useState } from "react";
import Busqueda from "../components/Busqueda";
import InfoCar from "../components/InfoCar";
import { Outlet } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RentCarHome() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="h-screen w-full">
      <Busqueda setCarros={setCarros} setLoading={setLoading} />
      <Slider {...settings}>
        {carros.map((carro) => (
          <InfoCar
            key={carro.id}
            marca={carro.marca}
            precio={carro.precio}
            ubicacion={carro.locacion}
            imgCarro={carro.imagen}
            modelo={carro.modelo}
            velocidad={carro.velocidad}
            kilometraje={carro.kilometraje}
          />
        ))}
      </Slider>
      <Outlet />
    </section>
  );
}

export default RentCarHome;
