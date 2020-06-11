import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const ReservedCard = ({item: {_id, title, description, category, price }, history, auth: {user}}) => {

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

<div className="reserved-card" onClick={goToItem}>
        <div className="reserved-card-image-container">
            <img src="" alt="" className="reserved-card-image"></img>
        </div>
            <div className="reserved-card-details-container">
    <div className="reserved-card-box">
        <div className="reserved-card-title">{title}</div>
    <div className="reserved-card-subtitle">{description}</div>
    <div className="reserved-card-subtitle">{category}</div>
    <div className="reserved-card-subtitle">{price}</div>
    </div>
        <div className="reserved-card-box">
            <div className="reserved-card-title">Urban Karl Johan</div>
            <div className="reserved-card-subtitle">Karl johans gata 24, 0163 Oslo</div>
        </div>
    </div>
</div>
    </Fragment>
    );
};

ReservedCard.propTypes = {
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(withRouter(ReservedCard));