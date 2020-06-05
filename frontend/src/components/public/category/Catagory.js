import React, {Fragment, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

// images
import image1 from './img/image1.jpg';
import image2 from './img/image2.png';
import image3 from './img/image3.jpg';
import photo1 from './img/photo1.jfif';

// css
import './components.css';

// components
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer';
import Profile from '../../profile/Profile';
import Showcase from '../showcase/Showcase';

import SectionCard from '../cards/SectionCard';
import StandardCard from '../cards/StandardCard';
import ReservedCard from '../cards/SectionCard';
import ItemDetails from '../details/ItemDetails';
import Form from '../form/Form';
import Submenu from '../submenu/Submenu';


const Catagory = props => {
    return (
        <Fragment>

<div className="root-container">
{/* NAVBAR HERE */}
<Navbar/>
{/* SIDEBAR HERE */}
<Sidebar />

<main className="main">

    <div className="contentbox">

        <Submenu />

        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src={image1} alt="" className="section-banner-image"></img>
            </div>
        </div>

        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                {/* STANDARD CARD */}
                <StandardCard />

            </div>

        </section>

        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src={image3} alt="" className="section-banner-image"></img>
            </div>
        </div>

        <section className="section">

            <div className="section-content-container">

                {/* SECTION CARDS HERE */}

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

Catagory.propTypes = {
    
};

export default Catagory;