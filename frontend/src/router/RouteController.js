import React from 'react';
import {Route, Routes} from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Home from "../client";
import Cars from "../dashboard/components/Cars";

const RouteController = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="admin">
                <Route path="dashboard"  element={<Dashboard/>}>
                    <Route path="cars" element={<Cars/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default RouteController;