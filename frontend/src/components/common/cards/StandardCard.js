import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import shopBrands1 from '../../../dummyImages/shopBrands1.png';

const SectionCard = ({ item: {_id, title, category, price}, history, auth: { user } }) => {

    const goToItem = () => {
        var id = "";
        if (_id) id = _id;
        try {
            if (user.role === 0) history.push(`/shop/${id}`);
            if (user.role === 1) history.push(`/business/shop/${id}`)
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
    auth: state.auth
})

export default connect(mapStateToProps, {})(withRouter(SectionCard));