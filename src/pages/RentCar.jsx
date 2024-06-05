import React from "react";

function RentCar() {
  return (
    <>
      <section className="flex flex-row mt-5">
        <section className="w-full h-dvh basis-1/2 p-2">
          <div class=" bg-white w-full h-full">
            <div>
              <img
                class="rounded-t-lg mt-5 p-5"
                src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_67c1989aeb7749bbac626a43e1dc6d42.webp"
                alt=""
              />
            </div>
            <div class="p-5">
              <div>
                <h5 class="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900">
                  Nissan
                </h5>
              </div>
              <p class="mb-3 font-normal text-left text-gray-700 ">
                Descripcion general de el vehiculo
              </p>
              <div>
                <h5 class="mb-2 text-3xl text-left font-bold tracking-tight text-gray-900">
                  $20000
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-dvh">
          <div className="p-2 flex flex-row-reverse">
            <button className="btn btn-ghost">Regresar</button>
          </div>
          <div className="p-5 gap-4 mt-10">
            <form class="max-w-sm mx-auto flex flex-col gap-4">
              <input
                type="text"
                placeholder="Fecha Final"
                className="input input-bordered w-32 md:w-auto"
              />
                            <input
                type="text"
                placeholder="Fecha Final"
                className="input input-bordered w-32 md:w-auto"
              />
                            <input
                type="text"
                placeholder="Fecha Final"
                className="input input-bordered w-32 md:w-auto"
              />
                            <input
                type="text"
                placeholder="Fecha Final"
                className="input input-bordered w-32 md:w-auto"
              />
                            <input
                type="text"
                placeholder="Fecha Final"
                className="input input-bordered w-32 md:w-auto"
              />
                            <input
                type="text"
                placeholder="Fecha Final"
                className="input input-bordered w-32 md:w-auto"
              />
            </form>
            <button className="btn hover:bg-blue-400 hover:text-white hover:shadow-none hover:border-none mt-5">
              Rentar
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default RentCar;
