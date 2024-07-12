import React, { useState } from 'react'
import {Content1} from "./components/content1"
import { RequestForm } from './components/request-form';
import {BecomAgence} from "./components/becomeAgence";
import {Welcome} from './components/welcome';
import { HappyClients } from './components/HappyClients';
import CarCarousel from './components/carCarousel';
import { Stats } from './components/Stats';
import CounterSection from './components/counterSection';


const page = () => {
  return (
    <div>
        <Content1/>
        <CarCarousel/>
        <Welcome/>
        <BecomAgence/>
        <HappyClients/>
        <CounterSection/>
    </div>
  )
}

export default page


