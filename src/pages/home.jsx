import React from 'react';
import Navbar from '../components/navbar.jsx';
import Hero from '../components/Hero';
import ExperienceAndProject from '../components/ExperianceANDProject';
import MainLayout from "../layout/MainLayout.jsx";



const Home = () => {
    return (
        <div className=''>


            <MainLayout>
                <Navbar />
                <Hero />
                <ExperienceAndProject />
            </MainLayout>



         

        </div>
    );
};

export default Home;