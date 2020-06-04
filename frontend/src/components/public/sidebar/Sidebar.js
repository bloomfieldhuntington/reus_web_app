import React, { PropTypes, Fragment } from 'react';

import './sidebar.css';

const Sidebar = props => {
    return (
        <Fragment>

<div className="sidebar">
    <div className="sidebar-content-container">

        <div className="sidebar-column-container">

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src="" alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src="" alt="icon" className="sidebar-column-icon"></img>
                </div>
            </div>

            <div className="sidebar-column-item-container">
                <div className="sidebar-column-item">
                    <img src="" alt="icon" className="sidebar-column-icon"></img>
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