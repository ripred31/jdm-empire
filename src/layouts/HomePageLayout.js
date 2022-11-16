import React from 'react';
import Header from './../Components/header';
import Footer from './../Components/Footer';

const HomePageLayout = props => {
    return (
        <div className="fullHeight">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default HomePageLayout;
