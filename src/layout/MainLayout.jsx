import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = ( { children } ) => {
    return (
        <div>
            {/*<Navbar />*/}
            { children }
            {/*<Footer />*/}
        </div>
    );
};

export default MainLayout;