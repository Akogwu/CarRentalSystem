import React from 'react';
import {Route, Routes} from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Home from "../client";


const RouteController = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin">
                <Route path="dashboard"  element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
};

export default RouteController;