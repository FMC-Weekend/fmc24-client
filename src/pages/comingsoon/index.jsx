import React from 'react';
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";

const textStyleBold = {
    backdropFilter: 'blur(9px) saturate(100%)',
    WebkitBackdropFilter: 'blur(9px) saturate(100%)',
    backgroundColor: 'rgba(39, 39, 39, 0)',
    color: 'white',
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10rem',
    minHeight:"520px"
};

const Index = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div className="comingsoon" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="comingsoon__text">
                    <h1 style={textStyleBold}>Coming Soon</h1>
                 
                </div>
            </div>
            <div >


                <Footer />
            </div>
        </div>
    );
};

export default Index;
