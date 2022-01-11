/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  faAtom,
  faUser,
  faStore,
  faCogs,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context as AuthContext } from "../../context/AuthContext";
import SideMenuItem from "./SideMenuItem";
import SideToggleItem from "./SideToggleItem";
import SideSubMenuItem from "./SideSubMenuItem";

const Sidebar = () => {

  const { state } = useContext( AuthContext );
  
  return (
  <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
      <div className="nav">
        <SideMenuItem label="Dashboard" to="/" icon={<FontAwesomeIcon icon={ faAtom }/>} />
        <SideMenuItem label="Account" to="/account" icon={<FontAwesomeIcon icon={ faUser }/>} />
      
      </div>
    </div>
    <div className="sb-sidenav-footer">
      <div className="small">Logged in as:</div>
      { state.username } 
    </div>
  </nav>
  );
};

export default Sidebar;
