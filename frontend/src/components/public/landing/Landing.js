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



const componentName = props => {
    return (
        <Fragment>

<div className="root-container">

<header className="header">
    <div className="contentbox">

        <div className="navbar-container">

            <div className="navbar-logo-container">
                <img src={reus_logo} alt="REUS" className="navbar-logo"></img>
            </div>

            <div className="navbar-searchfield-container">
                <img src={location} alt="icon" className="navbar-icon"></img>
                <input type="text" placeholder="Søk etter plagg eller brukere" className="navbar-searchfield-input"></input>
            </div>

            <div className="navbar-button">Registrer</div>
            <img src={location} alt="icon" className="navbar-icon"></img>

        </div>

    </div>
</header>

<div className="sidebar">
    <div className="sidebar-content-container">

        <div className="sidebar-column-container">

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={image2} alt="" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={location} alt="" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={location} alt="" className="sidebar-column-icon"></img>
                </div>
            </div>

        </div>

    </div>
</div>

<main className="main">

    <section className="section-showcase">
        <div className="showcase-image-container">
            <div className="test-txt">Editors Picks</div>
            <img src={photo1} alt="" className="showcase-image"></img>
        </div>
    </section>

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

        <div className="section-details">
            <div className="section-details-content-container">

                <div className="section-details-images-container">

                    <div className="section-details-main-image-container">
                        <img src={image1} alt="" className="section-details-main-image"></img>
                    </div>
                    <div className="section-details-image-selection">
                        <div className="section-details-image-small-container">
                            <img src={image1} alt="" className="section-details-image-small"></img>
                        </div>
                        <div className="section-details-image-small-container">
                            <img src={image1} alt="" className="section-details-image-small"></img>
                        </div>
                        <div className="section-details-image-small-container">
                            <img src={image1} alt="" className="section-details-image-small"></img>
                        </div>
                        <div className="section-details-image-small-container">
                            <img src={image1} alt="" className="section-details-image-small"></img>
                        </div>
                    </div>

                </div>

                <div className="section-details-description-container">
                    <div className="details-description-contentbox">

                        <div className="details-title-container">
                            <div className="details-title">Yves Saint Laurant</div>
                            <div className="details-title-icon-container">
                                <img src="./icons8-location-96.png" alt="" className="details-title-icon"></img>
                            </div>
                        </div>

                        <div className="details-text">Some text about the product</div>
                        <div className="details-price">400,- for 4 dagers leie</div>

                        <div className="details-button">Reserver</div>

                        <div className="details-text-b">Produktet finnes her:</div>

                        <div className="details-locations-container">
                            <div className="location-item">Drammensveien 1, 0001, Oslo</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title">Yves Saint Laurent</div>
                    <div className="section-card-category">Veske</div>
                    <div className="section-card-price">Price</div>
                </div>

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title">Yves Saint Laurent</div>
                    <div className="section-card-category">Veske</div>
                    <div className="section-card-price">Price</div>
                </div>

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title">Yves Saint Laurent</div>
                    <div className="section-card-category">Veske</div>
                    <div className="section-card-price">Price</div>
                </div>

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title">Yves Saint Laurent</div>
                    <div className="section-card-category">Veske</div>
                    <div className="section-card-price">Price</div>
                </div>

            </div>

        </section>

        <section className="section">
            <div className="section-content-container-col">

                <div className="section-title-alt">Registrer</div>

                <form action="" className="section-form">
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>

                    <div className="details-button">Register</div>

                </form>

            </div>
        </section>

        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src={image3} alt="" className="section-banner-image"></img>
            </div>
        </div>

        <section className="section">

            <div className="section-content-container">

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title-alt">Kategori</div>
                </div>

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title-alt">Kategori</div>
                </div>

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title-alt">Kategori</div>
                </div>

                <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={image1} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title-alt">Kategori</div>
                </div>


            </div>

        </section>

        <section className="section-profile">
            <div className="profile-content-container">

                <div className="profile-header-container">
                    <div className="profile-header-image-container">
                        <img src={image1} alt="" className="profile-header-image"></img>
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
                        <img src={twitter} alt="" className="profile-menu-item-icon"></img>
                        <div className="profile-menu-item-text">Favourites</div>
                    </div>
                    <div className="profile-menu-item-container">
                        <img src={twitter} alt="" className="profile-menu-item-icon"></img>
                        <div className="profile-menu-item-text">Reservations</div>
                    </div>
                </div>

                <div className="profile-items-container">

                    <div className="profile-items-favourites-container">

                        <div className="section-card">
                            <div className="section-card-image-container">
                                <img src={image1} alt="Veske" className="section-card-image"></img>
                            </div>
                            <div className="section-card-title">Yves Saint Laurent</div>
                            <div className="section-card-category">Veske</div>
                            <div className="section-card-price">Price</div>
                        </div>

                    </div>

                    <div className="profile-items-reserved-container">

                        <div className="reserved-card">
                            <div className="reserved-card-image-container">
                                <img src={image3} alt="" className="reserved-card-image"></img>
                            </div>
                            <div className="reserved-card-details-container">
                                <div>
                                    <div className="reserved-card-title">MATINIQUE</div>
                                    <div className="reserved-card-subtitle">GEORGE - Dressjakke</div>
                                </div>
                                <div>
                                    <div className="reserved-card-title">Urban Karl Johan</div>
                                    <div className="reserved-card-subtitle">Karl johans gata 24, 0163 Oslo</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    </div>

</main>

<footer className="footer">

    <div className="contentbox">

        <div className="footer-content-container">

            <div className="footer-column-container">
                <div className="footer-column">
                    <div className="footer-column-title">Lei klær</div>
                    <div className="footer-link">Shop</div>
                    <div className="footer-link">Kategorier</div>
                    <div className="footer-link">Søk</div>
                </div>

                <div className="footer-column">
                    <div className="footer-column-title">Om oss</div>
                    <div className="footer-link">Repairable</div>
                    <div className="footer-link">Re:us</div>
                    <div className="footer-link">Miljø</div>
                </div>

                <div className="footer-column">
                    <div className="footer-column-title">Hjelp</div>
                    <div className="footer-link">Kontakt oss</div>
                    <div className="footer-link">Repporter et problem</div>
                </div>
            </div>

            <div className="footer-icon-container">
                <img src="./icons8-facebook-f-48.png" alt="" className="footer-icon"></img>
                <img src="./icons8-twitter-48.png" alt="" className="footer-icon"></img>
                <img src="./icons8-important-mail-48.png" alt="" className="footer-icon"></img>
            </div>

            <div className="footer-text">Smidig Project 2020. Forretningskonsept Re:us omhandler utleie av produkter, spesielt tekstiler på en børekraftig måte.</div>
            <img src={reus_logo} alt="" className="footer-logo"></img>
            <div className="footer-text">Copyright © Smidig Gruppe 2, 2020</div>
        </div>

    </div>

</footer>

</div>
            
        </Fragment>
    );
};

componentName.propTypes = {
    
};

export default componentName;