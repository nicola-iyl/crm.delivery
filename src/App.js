import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as MessageProvider } from "./context/MessageContext";

import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Routes>
              
            </Routes>
          </BrowserRouter>
        </MessageProvider>        
      </AuthProvider>      
    </div>
  );
}

export default App;
