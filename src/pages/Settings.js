import React from "react";
import { useLocation } from "react-router-dom";

import EditSetting from "./settings/EditSetting";
import SettingsList from "./settings/SettingsList";

const Settings = () => {

  const query = new URLSearchParams( useLocation().search );
  const action = query.get('action');
  const id = query.get('id');

  // FORM MODIFICA
  if( action === 'edit' ){
    return (
      <EditSetting id = { id } />
    );  
  }
  // LISTA SERVIZI
  else{
    return (
      <SettingsList />
    );    
  }
}

export default Settings;