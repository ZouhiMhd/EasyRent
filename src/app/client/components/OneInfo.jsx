import React from 'react'

export const OneInfo = ({title,children}) => {
  return (
    <span style={
        {
          marginLeft : "10px", 
          marginTop : "20px",
          display:"flex", 
          justifyContent:"space-between" , 
          alignItems : "center",
          with:"50%"
          }}>
        <span><p> {title} </p></span>
        <span>{children} </span>
      </span>
  )
}

