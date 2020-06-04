import React, { PropTypes, Fragment } from 'react';
import './profile.css'

import ReservedCard from '../public/cards/ReservedCard'

const Profile = props => {
    return (
        <Fragment>
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
        </Fragment>
    );
};

Profile.propTypes = {
    
};

export default Profile;