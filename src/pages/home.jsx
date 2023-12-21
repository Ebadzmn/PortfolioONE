import React from 'react';

import Hero from '../components/Hero';
import ExperienceAndProject from '../components/ExperianceANDProject';
import MainLayout from "../layout/MainLayout.jsx";



const Home = () => {
    return (
        <div className=''>


            <MainLayout>
                <Hero />
                <ExperienceAndProject />
            </MainLayout>



         

        </div>
    );
};

export default Home;