import React from 'react'
import InfoRentaConfirmado from '../components/InfoRentaConfirmado'

function RentConfirmado() {
  return (
    <>
        <section className="h-screen w-full items-center p-32 flex flex-col">
            <InfoRentaConfirmado apellido="Torres" estado="Rentado" direccion="Calle 35h #11-112" telefono="3113112234" fechaInicial="13-01-2024" fechaFinal="20-01-2024" nombre="Geronimo" precio="20000" modelo="Mustannjs" img="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"/>
        </section>
    </>
  )
}

export default RentConfirmado
