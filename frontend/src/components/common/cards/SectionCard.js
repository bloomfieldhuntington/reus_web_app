import React, { PropTypes, Fragment } from 'react';


import Festklær from '../../../dummyImages/Festklær.png';

const SectionCard = props => {
    return (
        <Fragment>
            <div className="section-card">
                    <div className="section-card-image-container">
                        <img src={Festklær} alt="Veske" className="section-card-image"></img>
                    </div>
                    <div className="section-card-title-alt">Kategori</div>
                </div>
        </Fragment>
    );
};

SectionCard.propTypes = {
    
};

export default SectionCard;