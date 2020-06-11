// MARK:- IMPORTS
import React, { Fragment } from 'react';
import { Rediect, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// actions

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
import AccessoriesDame from '../../dummyImages/AccessoriesDame.png';
import AccessoriesHerre from '../../dummyImages/AccessoriesHerre.png';
// utils
const jwtDecoded = require('jwt-decode');

const Landing = ({isAuthenticated, item: {items}}) => {

    if (isAuthenticated && localStorage.token) {
        const decoded = jwtDecoded(localStorage.token);
        if (decoded.user.role === 0) {
            return <Redirect to="/shop" />
        } else if (decoded.user.role === 1) {
            return <Redirect to="/business/profile" />
        }
    }


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
                <img src={AccessoriesDame} alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>

        {/* ITEM SHOWCASE */}
        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                {items.slice(0, 4).map((item) => (
                    <StandardCard key={item._id} item={item} />
                ))}

            </div>

        </section>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src={AccessoriesHerre} alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>

        {/* ITEM SHOWCASE */}
        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

            {items.slice(0, 4).map((item) => (
                    <StandardCard key={item._id} item={item} />
                ))}

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
    isAuthenticated: PropTypes.bool,
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Landing);