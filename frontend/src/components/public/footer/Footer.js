import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// css
import './footer.css';
// images

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
            <img src="" alt="" className="footer-icon"></img>
            <img src="" alt="" className="footer-icon"></img>
            <img src="" alt="" className="footer-icon"></img>
        </div>

        <div className="footer-text">Smidig Project 2020. Forretningskonsept Re:us omhandler utleie av produkter, spesielt tekstiler på en børekraftig måte.</div>
        <img src="" alt="" className="footer-logo"></img>
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