import React from 'react'

const HeadDash = ({title}) => {
  return (
    <div className="head-title">
        <div className="left">
            <h1>{title}</h1>
            <ul className="breadcrumb">
                <li>
                    <a href="#">{title}</a>
                </li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li>
                    <a className="active" href="#">Home</a>
                </li>
            </ul>
        </div>
        {/* <a href="#" className="btn-download">
            <li className="bx bxs-cloud-download"></li>
            <span className="text">Download PDF</span>
        </a> */}
    </div>
  )
}

export default HeadDash