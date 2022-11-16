import React from 'react';
import Header from './../Components/header';
import Footer from './../Components/Footer';

const MainLayout = props => {
    return (
        <div>
            <Header />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
