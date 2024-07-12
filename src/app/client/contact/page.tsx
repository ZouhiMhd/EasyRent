import React from 'react'
import { Top } from "../components/Top";
import Link from "next/link";
import {  Home, LucideIcon,Phone ,Mail} from "lucide-react";


const people=[
  {title: 'Wade Coopreper',value:'209',},
  {title:'Arlene',value:'eco',},
];

const page = () => {
  return (
    <div className="w-full">
    <Top nom="CONTACT" title="Contact Us"/>
    <section className="flex max-sm:flex-col  items-start gap-4">
      
      <div className="flex-[2] w-full"> 
      <div className=" w-full p-4 flex flex-col gap-2 ">
         <div className="flex flex-col gap-4">
          {SIDE_PROJETS.map((projet,index)=>(
                  <SideProjet 
                  key={index}
                  logo={projet.logo}
                  title={projet.title}
                  description={projet.description}
                  url="/"
                  />
              ))}
            </div>
          </div>
        </div>

        <div className=" flex-[3] w-full  flex flex-col gap-4 ">
          <div className="p-4 flex-1">
              <div className="flex flex-col gap-4">
              <Formulaire/>
            </div>
          </div>
        </div>

    </section>

</div>
  )
}

export default page

export type SideProjetProps = {
  logo:LucideIcon;
  title: string;
  description:string;
  url:string;
}

const SIDE_PROJETS : SideProjetProps[]= [
{
    logo:Home,
    title: "Adresse",
    description: "3398 Rue MELEN, Ecole polytechnique Yaoundé",
    url:"",
},
{
    logo:Phone,
    title: "Téléphone",
    description: "+1235 2355 98",
    url:"",
},
{
    logo:Mail,
    title: "Email",
    description: "info@yoursite.com",
    url:"",
},
];

const SideProjet = (props: SideProjetProps) =>{
  return(
      
      <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 bg-white transition-colors p-1 rounded">
      
      <div className="bg-accent text-accent-foreground p-5 rounded-sm">
          <span><props.logo/></span>
      </div>
      <div>
      <p className="text-lg text-gray-300 font-semibold">{props.title}</p>
      <p className="text-sm text-muted-foreground font-semibold">{props.description}</p>
      </div>
      </Link>
  )
}

const Formulaire = () => {
return(
  <form  className="bg-gray-200 flex flex-col " style={{display:"flex", flexDirection:"column", margin:"10px", padding:"10px", justifyContent:"space-around"}}>
      <input style={{padding:"10px"}} type="text" className="bg-white rounded-2  border-gray-300" placeholder="Your Name"/>
      <input style={{padding:"10px"}} type="text" className="bg-white rounded-2 border-gray-300" placeholder="Your Email"/>
      <input style={{padding:"10px"}} type="text" className="bg-white rounded-2 border-gray-300" placeholder="Subject"/>
      <input style={{padding:"10px"}} type="textarea" className="bg-white rounded-2 border-gray-300 min-h-[100px]" placeholder="Message"/>
      
      <input type="submit" className="content button w-[30%] cursor-pointer"/>
  </form>
)
}