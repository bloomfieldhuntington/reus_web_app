import React, { Fragment } from 'react';

// images
import reus_logo from './reus.png';
import facebook from './facebook.png';
import mail from './mail.png';
import twitter from './twitter.png';
import location from './location.png';
import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.jpg';
import photo1 from './photo1.jfif';

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


const componentName = props => {
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
                <img src={image1} alt="" className="section-banner-image"></img>
            </div>
        </div>

        {/* DETAILS */}
        <ItemDetails />

        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                {/* STANDARD CARD */}
                <StandardCard />

            </div>

        </section>

        {/* FORM */}
        <Form />

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

        {/* PROFILE */}
        <Profile />

    </div>

</main>
{/* FOOTER HERE */}
<Footer />

</div>
            
        </Fragment>
    );
};

componentName.propTypes = {
    
};

export default componentName;