'use client';

import React, { useState, useEffect } from 'react';
import { HeadDash } from "@/components";
import { TableVehicle, Views, NewCarModal } from "./components";
import '../globals.css';
import 'boxicons/css/boxicons.css';
import axios from 'axios';
import { API_BASE_URL, USER_ID, AGENCE_ID } from "@/components/config_api.js";

export default function () {
  const [selectedAntenna, setSelectedAntenna] = useState('');
  const handleAntennaSelect = (agence_id) => {
    setSelectedAntenna(agence_id);
  };

  const [data, setData] = useState([]);
  const endpoint = `agences/${AGENCE_ID}/services`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${API_BASE_URL}/${endpoint}`);
        // console.log(res.data);
        setData(res.data); // Assurez-vous de mettre à jour le state avec res.data
      } catch (error) {
        console.error(error);
        console.log("erreur de get");
      }
    }
    fetchData();
  }, []);

  const selectedAgency = data?.find(agency => agency.id === selectedAntenna);

  return (
    <main>
      <HeadDash title="Offices" />
      <Views onSelect={handleAntennaSelect} />
      <div className="table-data">
        <div className="head-title">
          <a href="#" className="btn-download" style={{ position: "absolute", bottom: "20px", right: "20px" }}>
            <li className="bx bxs-cloud-download"></li>
            <span className="text"><NewCarModal /></span>
          </a>
        </div>
        <h2 style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {selectedAgency ? selectedAgency.name : 'Toutes les antennes'}
        </h2>
        
        <TableVehicle />
      </div>
    </main>
  );
}
