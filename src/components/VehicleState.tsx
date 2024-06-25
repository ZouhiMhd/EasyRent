import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

const VehicleState = ({completed, nocompleted}) => {
    return (
      <div className="todo">
        {/* <div className="head">
          <h3>Vehicles General States</h3>
        </div>
        <ul className="todo-list">
         <p>Completed</p>
          <li className="completed" style={{ borderLeft: `${completed} solid var(--blue)` }}>
            <p>.</p>
            <i className="bx bx-dots-vertical-rounded"></i>
          </li>
          <p>Not Completed</p>
          <li className="not-completed" style={{ borderLeft: `${nocompleted} solid var(--orange)` }}>
            <p>.</p>
            <i className="bx bx-dots-vertical-rounded"></i>
          </li>
        </ul> */}
        <ul className="todo-list">
          <li>
            <div style={{ width: '100%' }}>
              <p>Available</p>
              <LinearProgress variant="determinate" value={50} />
            </div>
          </li>
          <li>
            <div style={{ width: '100%' }}>
              <p>Unavailable</p>
              <LinearProgress variant="determinate" value={50} color="inherit" />
            </div>
          </li>
          {/* <li>
            <div style={{ width: '100%' }}>
              <p>Pending</p>
              <LinearProgress variant="determinate" value={50}  color="success"/>
            </div>
          </li>*/}
        </ul> 
        
      </div>
    );
  };

export default VehicleState