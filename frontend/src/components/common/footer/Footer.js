import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// css

// images
import reusLogo from '../../../images/reus_logo.png';
import facebook from '../../../images/icons_large/facebook.png';
import instagram from '../../../images/icons_large/instagram.png';
import twitter from '../../../images/icons_large/twitter.png';
import tinder from '../../../images/icons_large/tinder.png';


const Footer = props => {
    return (
        <Fragment>
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
            <img src={facebook} alt="" className="footer-icon"></img>
            <img src={instagram} alt="" className="footer-icon"></img>
            <img src={twitter} alt="" className="footer-icon"></img>
            <img src={tinder} alt="" className="footer-icon"></img>
        </div>

        <div className="footer-text">Smidig Project 2020. Forretningskonsept Re:us omhandler utleie av produkter, spesielt tekstiler på en bærekraftig måte. Les mer <a href="https://repairable.no/">repairable.no</a></div>
        <img src={reusLogo} alt="" className="footer-logo"></img>
        <div className="footer-text">Copyright © Smidig Gruppe 2, 2020</div>
    </div>

        </div>

        </footer>
            
    </Fragment>
    );
};

Footer.propTypes = {
    
};

export default Footer;