import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as MessageProvider } from "./context/MessageContext";

import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Services from "./pages/Services";
import Settings from "./pages/Settings";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Routes>
              <Route exac path="/login"    element={<PublicRoute><Login /></PublicRoute>}/>

              <Route exac path="/"       element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
              <Route exac path="/account" element={<PrivateRoute><Account /></PrivateRoute>}/>
              <Route exac path="/services" element={<PrivateRoute><Services /></PrivateRoute>}/>
              <Route exac path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>}/>
            </Routes>
          </BrowserRouter>
        </MessageProvider>        
      </AuthProvider>      
    </div>
  );
}

export default App;
