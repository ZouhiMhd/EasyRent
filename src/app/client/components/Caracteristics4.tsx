'use client'

import React from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const Likes = ({n}) => {
    const [value, setValue] = React.useState<number | null>(n);
    return (
      <Box sx={{ '& > legend': { mt: 2 }, }}>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    );
  }

const style1={
    height:"600px",
    overflow:"auto",
    // width :"100%",
    background: 'white',
    borderRadius: '10px',
    margin:'15px',
    padding : "20px"
  }
  const style2={
    color:'gray', 
    fontSize:'20px', 
    width:"100%",
    height:"50px",
    display:"flex",
    justifyContent:"center",
    alignItems : "center",
    }

    const history=[
        {
            idCust : "1",
            custName:"John Doe",
            photoCustumer: "/images/photo1.jpg",
            dateRent : "18 August 2024",
            datePickUP: "18 September 2024",
            dateBringBack : "18 October 2024",
            rate : 3,
            comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tristique justo. ',
        },
        {
            idCust : "2",
            custName:"John Doe",
            photoCustumer: "/images/photo2.jpg",
            dateRent : "18 August 2024",
            datePickUP: "18 September 2024",
            dateBringBack : "18 October 2024",
            rate : 4,
            comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tristique justo. ',
      
        },
        {
            idCust : "2",
            custName:"John Doe",
            photoCustumer: "/images/photo3.jpg",
            dateRent : "18 August 2024",
            datePickUP: "18 September 2024",
            dateBringBack : "18 October 2024",
            rate : 1,
            comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tristique justo. ',
        },
        {
            idCust : "3",
            custName:"John Doe",
            photoCustumer: "/images/photo4.jpg",
            dateRent : "18 August 2024",
            datePickUP: "18 September 2024",
            dateBringBack : "18 October 2024",
            rate : 3,
            comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tristique justo. ',
        },
        {
            idCust : "4",
            custName:"John Doe",
            photoCustumer: "/images/photo5.jpg",
            dateRent : "18 August 2024",
            datePickUP: "18 September 2024",
            dateBringBack : "18 October 2024",
            rate : 2,
            comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tristique justo. ',
      
        },
        {
            idCust : "4",
            custName:"John Doe",
            photoCustumer: "/images/photo6.jpg",
            dateRent : "18 August 2024",
            datePickUP: "18 September 2024",
            dateBringBack : "18 October 2024",
            rate : 3,
            comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tristique justo. ',
      
        },
    ]
const stylespan ={
    display : "flex",
    height : '20%',
    justifyContent :"space-between",
    paddingBottom:'20px'
}
const styelcontspan = {
    height : '150px',
    width : "100%",
    padding:"15px",
}
export const Caracteristics4 = () => {
  return (
    <div>
        <h3 style={style2}>
           ({history.length}) Reviews
        </h3>
        
        <div  style={style1}>
        {history.map((custumHis, key)=>(
            <div style={{width:"100%", display:"flex", height:"200px", padding: '15px'}}> 
                <Stack direction="row" spacing={2} style = {{height:"100px"}}>
                    <Avatar alt="Remy Sharp" src={custumHis.photoCustumer} sx={{ width: 100, height: 100 }} />
                </Stack>
                <div style={styelcontspan}>
                    <span style={stylespan}>
                        <p>{custumHis.custName}</p>
                        <p style={{color:'grey'}}>{custumHis.dateBringBack}</p>
                    </span>
                    <span  style={stylespan}>
                        <Likes n={custumHis.rate}/>
                        <p><i className = "bx bx-reply-all" style={{width:'35px', height:'35px'}}></i></p>
                    </span>
                    <span  style={stylespan}>
                        <p style={{color:'grey'}}>Pick up Date</p>
                        <p style={{color:'grey'}}>{custumHis.datePickUP}</p>
                    </span>
                    <span  style={stylespan}>
                        <p style={{color:'grey'}}>Bring Back Date</p>
                        <p style={{color:'grey'}}>{custumHis.dateBringBack}</p>
                    </span>
                    <div><br/>{custumHis.comment}</div>
                </div>
            </div>))}
        </div>
        
       
    </div>
  )
}
