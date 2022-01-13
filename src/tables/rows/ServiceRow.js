import React from "react";
import { faTrash, faEdit, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ServiceRow = ( { service, active, setForSettings } ) => {
  return (
    <tr>
      <td>{ service.id }</td>
      <td> { active ? <span className="badge bg-success">attivo</span> : <span className="badge bg-danger">non attivo</span> } </td>
      <td>{ service.label }</td>
      <td className="w-25">{ service.desc }</td>
      <td className="text-end"> { !active ? <Link className="btn btn-primary" to={ "service?action=service_request&id="+service.id }>richiedi attivazione</Link> : null }</td>
    </tr>
  );
}

export default ServiceRow;