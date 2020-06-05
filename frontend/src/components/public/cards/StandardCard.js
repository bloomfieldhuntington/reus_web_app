import React, { PropTypes, Fragment } from 'react';
import './sectioncard.css'

import shopBrands1 from '../../../dummyImages/shopBrands1.png';

const SectionCard = props => {
    return (
        <Fragment>
            <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={shopBrands1} alt="Veske" className="section-card-image"></img>
                    </div>
                    
                    <div className="section-card-title">Yves Saint Laurent</div>
                    <div className="section-card-category">Veske</div>
                    <div className="section-card-price">Price</div>
                </div>
        </Fragment>
    );
};

SectionCard.propTypes = {
    
};

export default SectionCard;