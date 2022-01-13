import _API from  "./_API";
import { sendResponse } from "../utilities/sendResponse"; 


export async function API_GetServices( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'services', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetActiveServices( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'active_services', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetNoActiveServices( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'no_active_services', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetSettings( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'settings', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}



