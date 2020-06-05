import React, {Fragment, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// css
import './navbar.css';
// images
import reus_logo from '../../../images/reus_logo.png';
import search from '../../../images/Search.png';
import Shoppingcart from '../../../images/Shoppingcart.png'

const Navbar = props => {
    return (
        <Fragment>
            <header className="header">
    <div className="contentbox">

        <div className="navbar-container">

            <Link to="/" className="navbar-logo-container">
                <img src={reus_logo} alt="REUS" className="navbar-logo"></img>
            </Link>

            <div className="navbar-searchfield-container">
                <img src={search} alt="icon" className="navbar-icon"></img>
                <input type="text" placeholder="Søk etter plagg eller brukere" className="navbar-searchfield-input"></input>
            </div>

            <Link to="/register" className="navbar-button">Registrer</Link>
            <img src={Shoppingcart} alt="icon" className="navbar-icon"></img>

        </div>

    </div>
</header>
        </Fragment>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;