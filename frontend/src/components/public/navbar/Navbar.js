import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// css
import './navbar.css';
// images

const Navbar = props => {
    return (
        <Fragment>
            <header className="header">
    <div className="contentbox">

        <div className="navbar-container">

            <div className="navbar-logo-container">
                <img src="{reus_logo}" alt="REUS" className="navbar-logo"></img>
            </div>

            <div className="navbar-searchfield-container">
                <img src="{location}" alt="icon" className="navbar-icon"></img>
                <input type="text" placeholder="Søk etter plagg eller brukere" className="navbar-searchfield-input"></input>
            </div>

            <div className="navbar-button">Registrer</div>
            <img src="{location}" alt="icon" className="navbar-icon"></img>

        </div>

    </div>
</header>
        </Fragment>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;