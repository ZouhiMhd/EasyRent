import React from 'react';
import {Order} from "./Order";

const RencentOrder = () => {

    const data=[
        {
            img : "/images/photo1.jpg",
            username : "John Doe",
            date : "01-10-2024",
            status:'completed'
        },
        {
            img :"/images/photo2.jpg",
            username : "John Doe",
            date : "01-10-2024",
            status:'pending'
        },
        {
            img : "/images/photo3.jpg",
            username : "John Doe",
            date : "01-10-2024",
            status:'process'
        },
        {
            img : "/images/photo4.jpg",
            username : "John Doe",
            date : "01-10-2024",
            status:'pending'
        },
        {
            img : "/images/photo5.jpg",
            username : "John Doe",
            date : "01-10-2024",
            status:'completed'
        }
]



  return (
    <div className="order">
          <div className="head">
                <h3>Recent Rents</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Custumers</th>
                        <th>Date Order</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e,index)=>
                    <Order key={index} username={e.username} date={e.date} status={e.status} img={e.img}/>
                    )}
                </tbody>
            </table>
        </div>
        
  )
}
export default RencentOrder