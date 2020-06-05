import React, { PropTypes, Fragment } from 'react';
// css
import './sidebar.css';
// Images
import menu from '../../../images/Burgermenu.png';
import reservation from '../../../images/reservation.png';
import edit from '../../../images/edit.png';
import settings from '../../../images/settings.png';
import Help from '../../../images/Help.png';
import Profile from '../../../images/Profile.png';

const Sidebar = props => {
    return (
        <Fragment>

<div className="sidebar">
    <div className="sidebar-content-container">

        <div className="sidebar-column-container">

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={menu} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item-profile">
                    <img src={Profile} alt="icon" className="sidebar-column-icon-profile"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={reservation} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={edit} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={settings} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src={Help} alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

        </div>

    </div>
</div>
            
        </Fragment>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;