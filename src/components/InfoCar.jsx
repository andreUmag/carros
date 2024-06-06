import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const InfoCar = ({ id, marca, modelo, precio, ubicacion, imgCarro, velocidad, kilometraje}) => {
  const navigate = useNavigate();

  const handleRentar = () => {
    navigate(`/Rentar/${id}`, {
      state: { id, marca, modelo, precio, ubicacion, imgCarro, velocidad, kilometraje}
    });
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow grid justify-center">
      <img className="p-8 rounded-t-lg h-60 w-80 rounded-xl" src={imgCarro} alt="product image" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {marca}
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {ubicacion}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {precio}
          </span>
          <button
            className="btn hover:bg-blue-400 hover:text-white hover:shadow-none hover:border-none"
            onClick={handleRentar}
          >
            Rentar
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default InfoCar;