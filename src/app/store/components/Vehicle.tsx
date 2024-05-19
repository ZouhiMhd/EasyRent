import React from 'react'
import {Order} from "./Order"


const Vehicle = () => {

    
const data=[
    {
        img : "/images/v1.png",
        id: "2323",
        matricule : "0ZD024",
        description : "Rav4",
        status:'completed'
    },
    {
        img :"/images/v2.png",
        id: "3424",
        matricule : "0ZD024",
        description : "Rav4",
        status:'completed'
    },
    {
        img : "/images/v3.png",
        id : "45532",
        matricule : "0ZD024",
        description : "Rav4",
        status:'completed'
    },
    {
        img : "/images/v4.png",
        id : "5462",
        matricule : "0ZD024",
        description : "Rav4",
        status:'completed'
    },
    {
        img : "/images/v5.png",
        id : "5342",
        matricule : "0ZD024",
        description : "Rav4",
        status:'completed'
    }
]


  return (
    <div className="order">
    <div className="head">
          <h3>Your Vehicles</h3>
          <i className="bx bx-search"></i>
          <i className="bx bx-filter"></i>
      </div>
      <table>
          <thead>
              <tr>
                  <th>Vehicle</th>
                  <th>Matricule</th>
                  <th>Description</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
              {data.map((e,index)=>
              <Order key={index} description={e.description} id={e.id} matricule={e.matricule} status={e.status} img={e.img}/>
              )}
          </tbody>
      </table>
  </div>
  )
}

export default Vehicle