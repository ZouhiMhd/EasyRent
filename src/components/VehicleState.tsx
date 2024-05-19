import React from 'react'

const VehicleState = ({completed, nocompleted}) => {
    return (
      <div className="todo">
        <div className="head">
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
        </ul>
      </div>
    );
  };

export default VehicleState