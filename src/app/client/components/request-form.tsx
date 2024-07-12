// import React from "react";


// export const RequestForm = () =>{
//   return (
//     <div className="top-[-10rem] relative flex ">
//         <form className="flex-1">
//                 <input type="text" placeholder="Ville de départ"/>
//                 <input type="text" placeholder="Ville d'arrivée"/>
//                 <div style={{display:"flex",justifyContent:"space-between",paddingTop:"2px",alignItems:"center",paddingLeft:"30px",paddingRight:"30px",}}>
//                     <input type="date" placeholder="Date"/>
//                     <input type="time" placeholder="Heure"/>
//                     <input type="number" placeholder="Nombre de passagers"/>
//                 </div>
//             </form>
//     <form className="w-[100%] items-center bg-[#01d28e] rounded-[1px] p-[10px]  flex-1 inline-flex flex-wrap">
//         <h2>Make your trip</h2>

//         <div className="p-0.625">
//         <label className="p-0.625">Pick-up location</label>
//         <input type="text" className="p-0.625 p-0.625 m-5 p-2.5  border border-[var(--bleu)] rounded-[5px]" />
//     </div>

//     <div className="p-0.625">
//         <label className="p-0.625">Drop-off location</label>
//         <input type="text" className="p-0.625 p-0.625 m-5 p-2.5  border border-[var(--bleu)] rounded-[5px]" />
//     </div>

//     <div className="p-0.625">
//         <label className="p-0.625">Pick-up Date</label>
//         <input type="text" className="p-0.625 p-0.625 m-5 p-2.5  border border-[var(--bleu)] rounded-[5px]" placeholder="Date"/>
//     </div>

//     <div className="p-0.625">
//         <label className="p-0.625">Drop-off date</label>
//         <input type="text" className="p-0.625 m-5 p-2.5  border border-[var(--bleu)] rounded-[5px]" />
//     </div>

//     <div className="p-0.625">
//         <label className="p-0.625">Pick-up time</label>
//         <input type="text" className="p-0.625" />
//     </div>
        
//         <div className="m-5 p-2.5  border border-[var(--bleu)] rounded-[5px]">
//             <input type="submit" value="Rent A Car Now" />
// 		    </div>

//     </form>
//     </div>
//   );
// };


// components/RequestForm.tsx
import React from 'react';

export const RequestForm: React.FC = () => {
  return (
    <div className="top-[-20rem] relative flex "> 
      <div className="container mx-auto flex flex-wrap items-center justify-between bg-transparent p-6 -mt-200 relative z-10">
        <div className="w-full md:w-1/1 bg-white p-8 rounded-lg shadow-lg ">
        <form action="" className=' w-full'>
            <div className='flex w-full pt-2 justify-center items-center flex-col'>
                <h2 className="text-2xl font-semibold mb-6">Vos attentes</h2>
                <div className='flex flex-wrap w-full pt-2 justify-between items-center'>
                    <div className="form-group mb-4 w-full">
                        <label className="block text-gray-700 mb-2">Catégorie de véhicule</label>
                        <input type="text" className=" w-full p-2 border border-gray-700 rounded-2" placeholder="A, B, C, D, Autre" />
                    </div>
                    <div className="form-group mb-4 w-full">
                        <label className="block text-gray-700 mb-2">Standing de véhicule</label>
                        <input type="text" className="form-control w-full p-2 border border-gray-700 rounded-2" placeholder="Classique, Standard, VIP, Autre" />
                    </div>  
                </div>
                <div className='flex inline-flex w-full pt-2 justify-between items-center'>
                    <div className="form-group w-1/2">
                        <label className="block text-gray-700 mb-2">Date de début de location</label>
                        <input type="date" className="form-control w-full p-2 border border-gray-700 rounded-2" placeholder="Date" />
                    </div>
                    <div className="form-group w-1/2">
                        <label className="block text-gray-700 mb-2">Date de fin de location</label>
                        <input type="date" className="form-control w-full p-2 border border-gray-700 rounded-2" placeholder="Date" />
                    </div>
                </div>
                <div className='flex inline-flex w-full pt-2 justify-between items-center'>
                    <div className="form-group mb-4 w-full">
                        <label className="block text-gray-700 mb-2">Durée de Location</label>
                        <input type="text" className="form-control w-full p-2 border border-gray-700 rounded-2" placeholder="Durée" />
                    </div>
                    <div className="form-group mb-4 w-full">
                        <label className="block text-gray-700 mb-2">Voulez-vous un chauffeur</label>
                        <input type="text" className="form-control w-full p-2 border border-gray-700 rounded-2" placeholder="oui/non" />
                    </div>
                </div>
                    <div className="form-group mb-6 w-full">
                        <label className="block text-gray-700 mb-2">Lieu de récupération du véhicule</label>
                        <input type="text" className="form-control w-full p-2 border border-gray-700 rounded-2" placeholder="Localisation" />
                    </div>
                    <div className="justify-center items-center">
                        <input type="submit" value="Louer Maintenant" className="btn btn-primary py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 w-full cursor-pointer" />
                    </div>


            </div>
            
            </form>
        </div>
        {/* <div className="w-full md:w-2/3 p-8">
          <h3 className="text-2xl font-semibold mb-6">Le moyen le plus efficace d'effectuer une location</h3>
          <div className="flex flex-wrap mb-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="services text-center p-6">
                <div className="icon mb-4 text-blue-600 text-3xl"><span className="flaticon-route"></span></div>
                <div className="text">
                  <h4 className="text-lg font-semibold mb-2">Définir clairement les attentes sur le véhicule</h4>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="services text-center p-6">
                <div className="icon mb-4 text-blue-600 text-3xl"><span className="flaticon-handshake"></span></div>
                <div className="text">
                  <h4 className="text-lg font-semibold mb-2">Choisir votre véhicule de location idéal</h4>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="services text-center p-6">
                <div className="icon mb-4 text-blue-600 text-3xl"><span className="flaticon-rent"></span></div>
                <div className="text">
                  <h4 className="text-lg font-semibold mb-2">Réservez votre véhicule dès maintenant</h4>
                </div>
              </div>
            </div>
          </div>
          <p><a href="#" className="btn btn-primary py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300">Réserver un véhicule</a></p>
        </div>*/}
      </div> 
    </div>
  );
}


