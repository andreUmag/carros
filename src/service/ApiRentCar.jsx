import React, { useEffect, useState } from 'react'

function ApiRentCar (){
    const urlBase = "http://localhost:8080/api/v1";
    const[car, setcar] = useState();
    const[rentedCar, SetRentedCar] = useState();

    useEffect(() => {

    }, []);

    
    
    return {
        car,
        rentedCar,
        setcar,
        SetRentedCar
    };
}

export {ApiRentCar}
