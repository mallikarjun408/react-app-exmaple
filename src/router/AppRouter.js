import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/index";
import Login from "../components/Login/index";
import history from "./history";


 const AppRouter = () => {
    
        return (
        
            <Routes history={history}>
                <Route path="/"  element={<Login/>} exact />
                <Route path="/Dashboard" element={<Dashboard/>} />
            </Routes>
                
        )
    
}

export default AppRouter;