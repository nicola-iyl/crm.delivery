import _API from  "./_API";
import { sendResponse } from "../utilities/sendResponse"; 

export async function API_Login( dataInput, callback ){
  await _API.post( 'login', dataInput )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_Logout( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'logout', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetRoles( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'roles', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetUserShop( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'user_shop', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}


