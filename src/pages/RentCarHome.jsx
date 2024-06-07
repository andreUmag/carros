import React from "react";
import Busqueda from "../components/Busqueda";
import InfoCar from "../components/InfoCar";
import { Outlet, Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carros = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Hilux SRX",
    precio: "$20,000",
    ubicacion: "Rodader",
    imgCarro:
      "https://www.toyota.com.co/wp-content/uploads/2021/02/Hilux_SRX_destacada_2-8_AT.jpg",
    velocidad: 180,
    kilometraje: 20000,
  },
  {
    id: 2,
    marca: "Honda",
    modelo: "Civic",
    precio: "$18,000",
    ubicacion: "Bonda",
    imgCarro:
      "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_4d1dbe2986fc4d328484b8d662be0f9b.jpg",
    velocidad: 200,
    kilometraje: 15000,
  },
  {
    id: 3,
    marca: "Ford",
    modelo: "Expedition",
    precio: "$25,000",
    ubicacion: "Taganga",
    imgCarro:
      "https://loscoches.com/wp-content/uploads/2023/10/Ford-Expedition-Los-Coches.jpg",
    velocidad: 160,
    kilometraje: 30000,
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "Camaro",
    precio: "$30,000",
    ubicacion: "Centro Historico",
    imgCarro:
      "https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/32ac50f1-1994-43a3-bf50-0294874a5078/v-1680227418/Desktop.webp",
    velocidad: 240,
    kilometraje: 10000,
  },
  {
    id: 5,
    marca: "BMW",
    modelo: "M3",
    precio: "$50,000",
    ubicacion: "Unimag",
    imgCarro:
      "https://www.bmw.com.co/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-gallery-impressions-m3-competition-02_890.jpg",
    velocidad: 250,
    kilometraje: 5000,
  },
  {
    id: 6,
    marca: "Audi",
    modelo: "Q7",
    precio: "$40,000",
    ubicacion: "Minca",
    imgCarro:
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2020/12/audi-q7-precio-2158627.jpg?tf=3840x",
    velocidad: 210,
    kilometraje: 12000,
  },
];

function RentCarHome() {
  const { id } = useParams();
  const settings = {
    className: "slider variable-width w-[958px]",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true
  };

  return (
    <>
      <Busqueda />
      <section className="p-16 translate-y-24 translate-x-28 h-96">
        <Slider {...settings}>
          {carros.map((carro) => (
            <InfoCar
              key={carro.id}
              marca={carro.marca}
              precio={carro.precio}
              ubicacion={carro.ubicacion}
              imgCarro={carro.imgCarro}
              modelo={carro.modelo}
              velocidad={carro.velocidad}
              kilometraje={carro.kilometraje}
            />
          ))}
        </Slider>
      </section>
      <Outlet />
    </>
  );
}

export default RentCarHome;
