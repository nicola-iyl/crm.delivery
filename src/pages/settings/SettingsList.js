import React, { useState, useContext, useEffect } from "react";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import Loader from "../../components/Loader";
import { API_GetActiveServices, API_GetSettings } from "../../api/ShopService";
import ServiceItem from "./partials/ServiceItem";

const SettingsList = () => {

  const [ services, setServices ] = useState( [] );
  const [ settings, setSettings ] = useState( [] );
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    getServices();
    getSettings();
  }, []);

  const getServices = async() => {
    await API_GetActiveServices( async (data, message) => {
      if(data){
        setServices(data.data);
        setLoading( false );
      }      
    })
  }

  const getSettings = async() => {
    await API_GetSettings( async (data, message) => {
      if(data){
        setSettings(data.data);
        setLoading( false );
      }      
    })
  }

  return (
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Configurazioni Funzionalità"> 
        { services.map( ( service, i) => { return ( <ServiceItem key={ service.id } service={ service } />)} ) }
      </StandardPage>
    </MasterLayout>
  );
}

export default SettingsList;