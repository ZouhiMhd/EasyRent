import React from 'react'
import Image from "next/image";
import { Top } from "../components/Top";
import { Vehicule } from "../components/vehicule";
import carsList from '../components/image';
import CustomFilter from "../components/CarFilter";

const people=[
    {title: 'Wade Coopreper',value:'209',},
    {title:'Arlene',value:'eco',},
];
const page = () => {
  return (
    <>
    <Top nom="CARS" title="Cars"/>
    {/* <CustomFilter  title="Filtre" options={people}/> */}
    <div className="flex flex-wrap items-center pt-25">
        {carsList.map((car, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 items-center ">
                <Vehicule imgpath={car.photo} name={car.nom} marque={car.marque} prix={car.prix} />
            </div>
        ))}
    </div>
</>
  )
}

export default page