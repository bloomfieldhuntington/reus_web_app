import React, {Fragment, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

// images
import image1 from './img/image1.jpg';
import image2 from './img/image2.png';
import image3 from './img/image3.jpg';
import photo1 from './img/photo1.jfif';
import lastNedAppen from '../../../dummyImages/lastNedAppen.png';
import AccessoriesDame from '../../../dummyImages/AccessoriesDame.png';

// css
import './components.css';

// components
import Navbar from '../../public/navbar/Navbar';
import Sidebar from '../../public/sidebar/Sidebar'
import Footer from '../../public/footer/Footer';
import Showcase from '../../public/showcase/Showcase';

import SectionCard from '../../public/cards/SectionCard';
import StandardCard from '../../public/cards/StandardCard';
import ReservedCard from '../../public/cards/SectionCard';
import ItemDetails from '../../public/details/ItemDetails';
import Form from '../../public/form/Form';

// Utils
const jwtDecode = require('jwt-decode');


const Landing = ({isAuthenticated}) => {

    if(isAuthenticated && localStorage.token){
        const decoded = jwtDecode(localStorage.token);
        if(decoded.user.role === 0) {
            return <Redirect to="/admin" />
        } else if(decoded.user.role === 1) {
            return <Redirect to="/business/profile" />
        } else if (decoded.user.role === 2) {
            return <Redirect to="/user/profile" />
        }
    }


    return (
        <Fragment>

<div className="root-container">
{/* NAVBAR HERE */}
<Navbar/>
{/* SIDEBAR HERE */}
<Sidebar />

<main className="main">

    {/* SHOWCASE */}
    <Showcase />

    <div className="contentbox">

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

        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src={AccessoriesDame} alt="" className="section-banner-image"></img>
            </div>
        </div>

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

        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src={lastNedAppen} alt="" className="section-banner-image"></img>
            </div>
        </div>

        <section className="section">

            <div className="section-content-container">

                {/* SECTION CARDS HERE */}

                <SectionCard />
                <SectionCard />
                <SectionCard />
                <SectionCard />


            </div>

        </section>


    </div>

</main>
{/* FOOTER HERE */}
<Footer />

</div>
            
        </Fragment>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Landing);