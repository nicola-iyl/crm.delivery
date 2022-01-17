import React, { useState, useEffect } from "react";

import { API_GetSettingsByType } from "../../../api/ShopService";

const SettingTypeItem = ( { settingType } ) => {

  const [ settingValue, setSettingValue ] = useState( '' );
  useEffect( () => {
    getSettings();
  }, []);

  const getSettings = async() => {
    await API_GetSettingsByType( settingType.id, (data, message) => {
      if(data){
        console.log(data.data.value);
        setSettingValue(data.data.value)
      }
    })
  }

  return(
    <div className="card mb-4">
      <div className="card-body">
        { settingType.name } : { settingValue }
        
      </div>
    </div>
   );
}

export default SettingTypeItem;