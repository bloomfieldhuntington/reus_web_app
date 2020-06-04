import React, { PropTypes, Fragment } from 'react';
import './itemdetails.css'

const ItemDetails = props => {
    return (
        <Fragment>
            <div className="section-details">
            <div className="section-details-content-container">

                <div className="section-details-images-container">

                    <div className="section-details-main-image-container">
                        <img src="" alt="Img" className="section-details-main-image"></img>
                    </div>
                    <div className="section-details-image-selection">
                        <div className="section-details-image-small-container">
                            <img src="" alt="Img" className="section-details-image-small"></img>
                        </div>
                        <div className="section-details-image-small-container">
                            <img src="" alt="Img" className="section-details-image-small"></img>
                        </div>
                        <div className="section-details-image-small-container">
                            <img src="" alt="Img" className="section-details-image-small"></img>
                        </div>
                        <div className="section-details-image-small-container">
                            <img src="" alt="Img" className="section-details-image-small"></img>
                        </div>
                    </div>

                </div>

                <div className="section-details-description-container">
                    <div className="details-description-contentbox">

                        <div className="details-title-container">
                            <div className="details-title">Yves Saint Laurant</div>
                            <div className="details-title-icon-container">
                                <img src="./icons8-location-96.png" alt="" className="details-title-icon"></img>
                            </div>
                        </div>

                        <div className="details-text">Some text about the product</div>
                        <div className="details-price">400,- for 4 dagers leie</div>

                        <div className="details-button">Reserver</div>

                        <div className="details-text-b">Produktet finnes her:</div>

                        <div className="details-locations-container">
                            <div className="location-item">Drammensveien 1, 0001, Oslo</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

ItemDetails.propTypes = {
    
};

export default ItemDetails;