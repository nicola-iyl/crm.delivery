import React from "react";

import SettingTypeItem from "./SettingTypeItem";

const ServiceItem = ( {service} ) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        { service.label }

        { service.settingTypes.map( ( settingType, i) => { return ( <SettingTypeItem key={ settingType.id } settingType = { settingType } />)} ) }
      </div>
    </div>
  );
}

export default ServiceItem;