import React from "react";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import MasterLayout from "../layouts/MasterLayout";
import StandardPage from "../layouts/StandardPage";

const Dashboard = () => {
  return (
      <MasterLayout>
        <StandardPage title="Dashboard">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="card">
                        <div className="card-body">
                          <FontAwesomeIcon className="w-100" size="6x" icon={ faUser }/>
                        </div>
                        <div className="card-title text-center"><Link className="nav-link" to="/account">ACCOUNT</Link></div>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StandardPage>
      </MasterLayout>
  );
};

export default Dashboard;
