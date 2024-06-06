import React from "react";
import { Outlet, Link } from "react-router-dom";

const InfoCar = ({ carro, precio, ubicacion, imgCarro }) => {
  return (
    <>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="p-8 rounded-t-lg" src={imgCarro} alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {carro}
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ">
              {ubicacion}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              {precio}
            </span>
            <Link to="/Rentar"><button className="btn hover:bg-blue-400 hover:text-white hover:shadow-none hover:border-none">
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
            </button></Link>
            
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default InfoCar;
