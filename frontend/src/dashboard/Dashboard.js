import React from 'react';
import TemplateLayout from "./template/TemplateLayout";
import {useLocation} from "react-router-dom";
import Cars from "./components/Cars";
import { CardTabs } from './components/CardTabs';


const Dashboard = () => {
    const location = useLocation();
    return (
        <TemplateLayout>
            { (location.pathname === '/admin/dashboard') && <CardTabs/>}
            { (location.pathname === '/admin/dashboard/cars') && <Cars/>}
        </TemplateLayout>);
};

export default Dashboard;