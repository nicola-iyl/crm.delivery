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
        { shop ? shop.name : null }
      </StandardPage>
    </MasterLayout>
  );
}

export default Account;