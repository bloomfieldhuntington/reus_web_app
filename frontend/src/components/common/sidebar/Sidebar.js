import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
// Images
import Profile from '../../../images/icons_large/user.png';
import reservation from '../../../images/icons_large/reserve.png';
import settings from '../../../images/icons_large/settings.png';
import logout from '../../../images/icons_large/logout.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// actions
import { logout_user } from '../../../actions/auth_user'

const Sidebar = ({ auth: { user }, logout_user}) => {

    var profileLink = "";
    if (user) {
    if (user.role === 0) {
        profileLink = "/profile"
    } else if (user.role === 1) {
        profileLink = "/business/profile"
    } else if (user.role === 2) {
        profileLink = "/admin/profile"
    }
    }

    function LogoutBtn() {
        if (user) {
            if (user.role === 0) {
                return <div className="sidebar-column-item" onClick={logout_user}>
                <img src={logout} alt="icon" className="sidebar-column-icon"></img>
                    </div>
            } else if (user.role === 1) {
                return <div className="sidebar-column-item" onClick={logout_user}>
                <img src={logout} alt="icon" className="sidebar-column-icon"></img>
                    </div>
            }
        }
        return <div></div>
    }

    return (
        <Fragment>

<div className="sidebar">
    <div className="sidebar-content-container">

        <div className="sidebar-column-container">

            <div className="sidebar-column-item-container">
                <Link to={profileLink} className="sidebar-column-item-profile">
                    <img src="" alt="" className="sidebar-column-icon"></img>
                </Link>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={reservation} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={settings} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
            <LogoutBtn />
            </div>


        </div>

    </div>
</div>
            
        </Fragment>
    );
};

Sidebar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout_user: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    logout_user
})

export default connect(mapStateToProps, { logout_user })(Sidebar);