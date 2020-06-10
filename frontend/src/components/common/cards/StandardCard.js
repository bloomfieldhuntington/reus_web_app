import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import shopBrands1 from '../../../dummyImages/shopBrands1.png';

const SectionCard = ({ item: {_id, title, category, price}, history }) => {

    const goToItem = () => {
        var id = "";
        if (_id) id = _id;
        try {
            history.push(`/shop/${id}`)
        } catch (error) {
            
        }
    }

    return (
        <Fragment>
            <div className="section-card" onClick={goToItem}>
                    <div className="section-card-image-container">
                        <img src={shopBrands1} alt="Veske" className="section-card-image"></img>
                    </div>
                    
    <div className="section-card-title">{(title) ? title : "Loading"}</div>
                    <div className="section-card-category">{(category) ? category : "Loading..."}</div>
                    <div className="section-card-price">{(price) ? price : "Loading"}</div>
                </div>
        </Fragment>
    );
};

SectionCard.propTypes = {
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(null, {})(withRouter(SectionCard));