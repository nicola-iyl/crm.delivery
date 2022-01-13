import React, { useState, useContext, useEffect } from "react";
import { API_GetUserShop } from "../api/AuthService";

import MasterLayout from "../layouts/MasterLayout";
import StandardPage from "../layouts/StandardPage";
import Loader from "../components/Loader";


const Account = () => {

  const [ shop, setShop] = useState(null);
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    getShop();  
    
  },[]);
  
  const getShop = async () => {
    await API_GetUserShop( async( data, message ) => {
      if(data){ setShop( data.data ); }      
      setLoading(false);
    })
  }

  return (
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Account">
        <div>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Username</strong>:</li>
            <li className="list-group-item w-50">{ localStorage.getItem('username') }</li>
          </ul>
        </div> 
        <div className="mt-3">
          <h5>Dettagli Attività</h5>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Ragione Sociale</strong>:</li>
            <li className="list-group-item w-50">{ shop.ragione_sociale }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Insegna</strong>:</li>
            <li className="list-group-item w-50">{ shop.insegna }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Dominio</strong>:</li>
            <li className="list-group-item w-50">{ shop.dominio }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Nome</strong>:</li>
            <li className="list-group-item w-50">{ shop.name }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Email</strong>:</li>
            <li className="list-group-item w-50">{ shop.email }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Città</strong>:</li>
            <li className="list-group-item w-50">{ shop.citta }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Indirizzo</strong>:</li>
            <li className="list-group-item w-50">{ shop.indirizzo }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Cap</strong>:</li>
            <li className="list-group-item w-50">{ shop.cap }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Tel.</strong>:</li>
            <li className="list-group-item w-50">{ shop.tel }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Whatsapp</strong>:</li>
            <li className="list-group-item w-50">{ shop.whatsapp }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>P. Iva</strong>:</li>
            <li className="list-group-item w-50">{ shop.p_iva }</li>
          </ul>
          <ul className="list-group list-group-horizontal mb-1">
            <li className="list-group-item w-50"><strong>Sede legale</strong>:</li>
            <li className="list-group-item w-50">{ shop.sede_legale }</li>
          </ul>
        </div>     
      </StandardPage>
    </MasterLayout>
  );
}

export default Account;