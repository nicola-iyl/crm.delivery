import React, { useState } from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceRow from "./rows/ServiceRow";
//import ServiceSettings from "../pages/services/ServiceSettings";
import Modal from "../components/Modal";
//import { API_removeService } from "../api/services_service";

const TableServices = ( { activeServices, noActiveServices, removeService , sortBy } ) => {

  const [ focusService, setFocusService ] = useState(null);
  const [ showSettings, setShowSettings ] = useState(false);

  const setForSettings = (id) => {
    const item = activeServices.find( item => item.id === id);
    setFocusService( item );
    setShowSettings( true );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id <FontAwesomeIcon icon={ faSort } /></th>
            <th>Stato</th>
            <th>Label <FontAwesomeIcon icon={ faSort } /></th>
            <th className="w-50">Descrizione</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { activeServices.map( ( service, i) => { return (
              <ServiceRow 
                setForSettings = { (id) => setForSettings(id)}
                key = { service.id } 
                service = { service }
                active = { true }
              />) 
              })
          }
          { noActiveServices.map( ( service, i) => { return (
              <ServiceRow 
                setForSettings = { (id) => setForSettings(id)}
                key = { service.id } 
                service = { service }
                active = { false }
              />) 
              })
          }
        </tbody>
      </table>
      
    </>    
  );
}

export default TableServices;