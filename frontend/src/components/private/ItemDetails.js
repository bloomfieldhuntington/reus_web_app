// MARK:- IMPORTS
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes, {} from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// actions
import { 
    get_one_item_user, 
    add_favourites, 
    add_reserved,
    remove_favourites,
    remove_reserved
} from '../../actions/item';
// components
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar';
import Footer from '../common/footer/Footer';
// Images
import heart from '../../images/icons_large/heart.png'

const ItemDetails = ({
    get_one_item_user,
    add_favourites,
    add_reserved,
    remove_favourites,
    remove_reserved,
    match,
    auth: { user },
    item: { item }
}) => {
    useEffect(() => {
        get_one_item_user(match.params.id);
    }, [get_one_item_user, match.params.id])

    // state
    var [isFav, setIsFav] = useState({ isFav: false });
    // Add item to fav
    const addToFavourites = () => {
        add_favourites(item._id);
    }
    const addToReserved = () => {
        add_reserved(item._id);
    }
    // Image Container

    // Desciption Container
    function DesciptionContainer() {
        if (!item) {
            return <Fragment>Loading...</Fragment>
        } else {
            return <div className="section-details-description-container">
                            <div className="details-description-contentbox">

                                <div className="details-title-container">
        <div className="details-title">{item.title}</div>
                                    <div className="details-title-icon-container" onClick={addToFavourites}>
                                        <img src={heart} alt="Icn" className="details-title-icon"></img>
                                    </div>
                                </div>

        <div className="details-text">{item.description}</div>
                                <div className="details-price">{item.price}</div>

                                <div className="details-button" onClick={addToReserved}>Reserver</div>

                                <div className="details-text-b">Produktet finnes her:</div>

                                    {item.locations.map((location, index) => (
                                <div className="details-locations-container" key={index}>
                                        <div className="location-item">{location}</div>
                                </div>
                                    ))}

                            </div>
                        </div>
        }

    }
    
    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">

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

                        <DesciptionContainer />

                    </div>

                </div>
            

            <div className="contentbox">
        {/* START */}




        {/* END */}
            </div>
        </main>

        <Footer />
        
    </div>
</Fragment>
    );
};

ItemDetails.propTypes = {
    get_one_item_user: PropTypes.func.isRequired,
    add_reserved: PropTypes.func.isRequired,
    add_favourites: PropTypes.func.isRequired,
    remove_reserved: PropTypes.func.isRequired,
    remove_favourites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {
    get_one_item_user,
    add_reserved,
    add_favourites,
    remove_reserved,
    remove_favourites
})(withRouter(ItemDetails));