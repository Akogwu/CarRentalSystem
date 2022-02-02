import React, { useEffect } from 'react';
import Layout from "./template/Layout";
import Hero from "./components/Hero";
import Fleets from "./components/Fleets";


const Home = () => {

    useEffect(() => {
        localStorage.setItem('token',"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdXN0b21lciIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0NVU1RPTUVSIn1dLCJpYXQiOjE2NDM4MzU5NjIsImV4cCI6MTY0NDIxMzYwMH0.sUgV_NGpeUEdXowtNtsKXAVNfTSeZzO-unlBrWfgFpECcJaX-0ZvhVtATjGJGO_LB9a963xvX6tw6uxYoAWq9Q")
    },[])

    return (
        <Layout>
            <Hero/>
            <Fleets/>
        </Layout>
    );
};

export default Home;