import React, {Fragment, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

// images

// css
import './businessprofile.css';

// components
import Navbar from '../../../public/navbar/Navbar';
import Sidebar from '../../../public/sidebar/Sidebar'
import Footer from '../../../public/footer/Footer';

import ReservedCard from '../../../public/cards/SectionCard';



const BusinessProfile = props => {
    return (
        <Fragment>

<div className="root-container">
{/* NAVBAR HERE */}
<Navbar/>
{/* SIDEBAR HERE */}
<Sidebar />

<main className="main">

    <div className="contentbox">
    <section className="section-profile">
            <div className="profile-content-container">

                <div className="profile-header-container">
                    <div className="profile-header-image-container">
                        <img src="" alt="Img" className="profile-header-image"></img>
                    </div>
                    <div className="profile-header-details-container">
                        <div className="profile-header-name">Philip</div>
                        <div className="profile-header-stats-container">
                            <div className="profile-header-stats-item">210 follow</div>
                            <div className="profile-header-stats-item">67 followers</div>
                        </div>
                    </div>
                </div>

                <div className="profile-menu-container">
                    <div className="profile-menu-item-container">
                        <img src="" alt="Img" className="profile-menu-item-icon"></img>
                        <div className="profile-menu-item-text">Favourites</div>
                    </div>
                    <div className="profile-menu-item-container">
                        <img src="" alt="Img" className="profile-menu-item-icon"></img>
                        <div className="profile-menu-item-text">Reservations</div>
                    </div>
                </div>

                <div className="profile-items-container">

                    <div className="profile-items-favourites-container">

{/* SECTION CARD HERE */}
                        <div className="section-card">
                            <div className="section-card-image-container">
                                <img src="" alt="Veske" className="section-card-image"></img>
                            </div>
                            <div className="section-card-title">Yves Saint Laurent</div>
                            <div className="section-card-category">Veske</div>
                            <div className="section-card-price">Price</div>
                        </div>

                    </div>

                    <div className="profile-items-reserved-container">
                        {/* RESERVED CARD */}
                        <ReservedCard />

                    </div>
                </div>

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

BusinessProfile.propTypes = {
    
};

export default BusinessProfile;