import React, { PropTypes, Fragment } from 'react';

const Submenu = props => {
    return (
        <Fragment>

        <div className="section-navigation-container">
            <div className="section-navigation-title">Kategorier</div>
            <div className="section-navigation-links-container">
                <div className="section-navigation-link">Dame</div>
                <div className="vertical-divider">|</div>
                <div className="section-navigation-link">Herre</div>
                <div className="vertical-divider">|</div>
                <div className="section-navigation-link">Barn</div>
            </div>
        </div>
            
        </Fragment>
    );
};

Submenu.propTypes = {
    
};

export default Submenu;