import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Images
import Profile from '../../../images/icons_large/user.png';
import reservation from '../../../images/icons_large/reserve.png';
import settings from '../../../images/icons_large/settings.png';
import logout from '../../../images/icons_large/logout.png';
import profileImg from '../../../dummyImages/profileImg.jpg';
// actions
import { logout_user } from '../../../actions/auth_user'

const Sidebar = ({ auth: { user }, logout_user}) => {

    // Buttons
    function ProfileImgBtn() {
        if (user) {
            if (user.role === 0) {
                return <Link to="/profile" className="sidebar-column-item-profile">
                <img src={profileImg} alt="" className="sidebar-column-icon-img"></img>
            </Link>
            } else if (user.role === 1) {
                return <Link to="/business/profile" className="sidebar-column-item-profile">
                <img src={profileImg} alt="" className="sidebar-column-icon-img"></img>
            </Link>
            }
        }
        return <Fragment></Fragment>
    }
    function ReservedBtn() {
        if (user) {
            if (user.role === 0) {
                return <Link to="/profile" className="sidebar-column-item">
                <img src={reservation} alt="icon" className="sidebar-column-icon"></img>
            </Link>
            } else if (user.role === 1) {
                return <Link to="/business/profile" className="sidebar-column-item">
                <img src={reservation} alt="icon" className="sidebar-column-icon"></img>
            </Link>
            }

        }
        return <Fragment></Fragment>
    }

    function SettingsBtn() {
        if (user) {
            if (user.role === 0) {
                return <Link to="/settings" className="sidebar-column-item">
                    <img src={settings} alt="icon" className="sidebar-column-icon"></img>
                </Link>
            } else if (user.role === 1) {
                return <Link to="/business/settings" className="sidebar-column-item">
                    <img src={settings} alt="icon" className="sidebar-column-icon"></img>
                </Link>
            }

        }
        return <Fragment></Fragment>
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
        return <Fragment></Fragment>
    }


    return (
        <Fragment>

<div className="sidebar">
    <div className="sidebar-content-container">

        <div className="sidebar-column-container">

            <div className="sidebar-column-item-container">
                <ProfileImgBtn />
            </div>

            <div className="sidebar-column-item-container">
                <ReservedBtn />
            </div>

            <div className="sidebar-column-item-container">
                <SettingsBtn />
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