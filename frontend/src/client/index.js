import React from 'react';
import Layout from "./template/Layout";
import Hero from "./components/Hero";
import Fleets from "./components/Fleets";


const Home = () => {
    return (
        <Layout>
            <Hero/>
            <Fleets/>
        </Layout>
    );
};

export default Home;