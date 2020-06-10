// MARK:- IMPORTS
import React, { PropTypes, Fragment } from 'react';
// css
import '../components.css'

// components
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar';
import Footer from '../common/footer/Footer';

import Showcase from '../common/showcase/Showcase';
import StandardCard from '../common/cards/StandardCard';
import SectionCard from '../common/cards/SectionCard';
// Images

const Landing = props => {
    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">

            {/* SHOWCASE */}
            <Showcase />

            <div className="contentbox">

            {/* SECTION PAGE NAVIGATION */}
            <div className="section-navigation-container">
            <div className="section-navigation-title">Shop</div>
            <div className="section-navigation-links-container">
                <div className="section-navigation-link">Dame</div>
                <div className="vertical-divider">|</div>
                <div className="section-navigation-link">Herre</div>
                <div className="vertical-divider">|</div>
                <div className="section-navigation-link">Barn</div>
            </div>
            </div>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src="" alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>

        {/* ITEM SHOWCASE */}
        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                {/* STANDARD CARD */}
                <StandardCard />
                <StandardCard />
                <StandardCard />
                <StandardCard />

            </div>

        </section>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src="" alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>

        {/* ITEM SHOWCASE */}
        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                {/* STANDARD CARD */}
                <SectionCard />
                <SectionCard />
                <SectionCard />
                <SectionCard />

            </div>

        </section>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src="" alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>



{/* END */}
            </div>
        </main>

        <Footer />
        
    </div>
</Fragment>
    );
};

Landing.propTypes = {
    
};

export default Landing;