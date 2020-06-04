import React, { PropTypes, Fragment } from 'react';
import './sectioncard.css';

const ReservedCard = props => {
    return (
        <Fragment>

<div className="reserved-card">
        <div className="reserved-card-image-container">
            <img src="" alt="" className="reserved-card-image"></img>
        </div>
            <div className="reserved-card-details-container">
    <div>
        <div className="reserved-card-title">MATINIQUE</div>
        <div className="reserved-card-subtitle">GEORGE - Dressjakke</div>
    </div>
        <div>
            <div className="reserved-card-title">Urban Karl Johan</div>
            <div className="reserved-card-subtitle">Karl johans gata 24, 0163 Oslo</div>
        </div>
    </div>
</div>
    </Fragment>
    );
};

ReservedCard.propTypes = {
    
};

export default ReservedCard;