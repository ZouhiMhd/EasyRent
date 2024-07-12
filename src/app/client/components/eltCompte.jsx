import {NavLink} from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

export  const ElementCompte = ({titre,lien,children,icon: Icon}) =>{
    return (
            <NavLink to ={lien} >
                

                <span style={{marginLeft : "10px", 
                    marginTop : "20px",
            
                    display:"flex", 
                    justifyContent:"space-between" , 
                    alignItems : "center",
                    with:"50%"
                }}>
                    <span style={{ justifyContent:"space-between"}}>{Icon && <Icon />} {titre}</span>
                    <span>{children}<FaChevronRight /></span>
                    
                </span>
                
            </NavLink>    
    )
};