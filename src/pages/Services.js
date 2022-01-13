import React, { useState, useContext, useEffect } from "react";
import { API_GetActiveServices, API_GetNoActiveServices } from "../api/ShopService";

import MasterLayout from "../layouts/MasterLayout";
import StandardPage from "../layouts/StandardPage";
import Loader from "../components/Loader";
import TableServices from "../tables/TableServices";

const Services = () => {

  const [ activeServices, setActiveServices ] = useState([]);
  const [ noActiveServices, setNoActiveServices ] = useState([]);
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    getActiveServices();
    getNoActiveServices();
  },[]);

  const getActiveServices = async() => {
    await API_GetActiveServices( async(data, message) => {
      if( data ){ setActiveServices(data.data) }
      setLoading(false);
    })
  }

  const getNoActiveServices = async() => {
    await API_GetNoActiveServices( async(data, message) => {
      if( data ){ setNoActiveServices(data.data) }
      setLoading(false);
    })
  }

  return(
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Servizi e Funzionalità del Delivery Inyourlife"> 
        <div className="row mb-4">
          <div className="col-12">
            In questa pagina sono elencate tutte le funzionalità del Delivery Inyourlife, attive e non, per il tuo Account Delivery.
            <br />
            Puoi richiedere l'attivazione di qualunque funzionalità cliccando sul relativo pulsante "richiedi attivazione".
          </div>
        </div>
        <TableServices 
          activeServices = { activeServices }
          noActiveServices = { noActiveServices }
        />
      </StandardPage>
    </MasterLayout>
  );
}

export default Services;