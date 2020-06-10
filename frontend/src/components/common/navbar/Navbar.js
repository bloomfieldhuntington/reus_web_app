import React, {Fragment, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// css

// images
import reus_logo from '../../../images/reus_logo.png';
import search from '../../../images/icons_large/search.png';
import Shoppingcart from '../../../images/icons_large/cart.png'

// Utils
const jwtDecode = require('jwt-decode');

const Navbar = ({auth: { user, isAuthenticated}}) => {
    
    var optionLink = "Register";
    if(isAuthenticated && localStorage.token){
        const decoded = jwtDecode(localStorage.token);
        if(decoded.user.role === 1) {
            optionLink = "Add Item"
        }
    }

    function OptionBtn() {
        if (user) {
            if (user.role === 0) {
                return <Link to="/shop" className="navbar-button">Shop</Link>
            } else if (user.role === 1) {
                return <Link to="/add/product" className="navbar-button">Add Product</Link>
            }
        }
        return <Link to="/register" className="navbar-button">Register</Link>
    }

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

            {/* <Link to={(isAuthenticated && localStorage.token) ? "/business/create_item" : "/register"} className="navbar-button">{optionLink}</Link> */}
            <OptionBtn />
            <img src={Shoppingcart} alt="icon" className="navbar-icon"></img>

        </div>

    </div>
</header>
        </Fragment>
    );
};

Navbar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(Navbar);