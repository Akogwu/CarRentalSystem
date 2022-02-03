import React from 'react';
import TemplateLayout from "./template/TemplateLayout";
import {useLocation} from "react-router-dom";
import Cars from "./components/Cars";


const Dashboard = () => {
    const location = useLocation();
    return (
        <TemplateLayout>
            { (location.pathname === '/admin/dashboard/cars') && <Cars/>}
        </TemplateLayout>);
};

export default Dashboard;