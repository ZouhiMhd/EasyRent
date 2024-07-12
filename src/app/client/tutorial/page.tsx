import React from 'react'
import type { NextPage } from "next";
import { HappyClients } from "./components/HappyClients";
import { Stats } from "./components/Stats";
import { Top } from "./components/Top";
import {Welcome} from "./components/welcome";
import { BecomAgence } from "./landing/components/becomeAgence";
import VisitorCounter from "./components/visitorCounter";
import CarCarousel from "./components/carCarousel";
import CounterSection from "./components/counterSection";

const page = () => {
  return (
    <div>
    <Top nom="ABOUT" title="About"/>
    <section className="section flex items-center bg-pink-200">
        <div className="text-white">
            <Welcome/>
            <BecomAgence/>
        </div>
    </section>
    <HappyClients/>
    {/* <VisitorCounter/> */}
    <CounterSection/>
</div>
  )
}

export default page