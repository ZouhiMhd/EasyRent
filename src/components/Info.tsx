import React from 'react'
import {BoxInfoRent} from "./BoxInfo";
import {BoxInfoVisit} from "./BoxInfo";
import {BoxInfoTotal} from "./BoxInfo"; 

const Info = ({qte1, qte2,qte3}) => {
  return (
    <ul className="box-info">
        <BoxInfoRent>{qte1}</BoxInfoRent> 
        <BoxInfoVisit>{qte2}</BoxInfoVisit> 
        <BoxInfoTotal>{qte3}</BoxInfoTotal>  
    </ul>
  )
}
export default Info
