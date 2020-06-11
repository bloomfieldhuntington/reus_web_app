import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// components
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar'
import Footer from '../common/footer/Footer';
import ReservedCard from '../common/cards/ReservedCard';
import StandardCard from '../common/cards/StandardCard';
// actions
import { get_items_for_rent, get_items_rented_out} from '../../actions/item';
// images
import reserve from '../../images/icons_large/reserve.png';
import heart from '../../images/icons_large/heart.png';
import { connect } from 'react-redux';

const ProfileBusiness = ({ auth: {user}, item: { itemsForRent, itemsRentedOut, loading }, get_items_for_rent, get_items_rented_out }) => {
    useEffect(() => {
        get_items_for_rent();
        get_items_rented_out();
    }, [get_items_for_rent, get_items_rented_out])

    var [status, setStatus] = useState(0)


    return (

<Fragment>

<div className="root-container">
    <Navbar/>
    <Sidebar />

    <main className="main">
        <div className="contentbox">

            <section className="section-profile">
            <div className="profile-content-container">

                <div className="profile-header-container">
                    <div className="profile-header-image-container">
                        <img src="" alt="Img" className="profile-header-image"></img>
                    </div>
                    <div className="profile-header-details-container">
    {(user) ? <div className="profile-header-name">{user.username}</div> : <div className="profile-header-name">Loading...</div>}
                        <div className="profile-header-stats-container">
    {(user) ? <div className="profile-header-stats-item">{user.following.length} Following</div> : <div className="profile-header-stats-item">Loading...</div>}
    {(user) ? <div className="profile-header-stats-item">{user.followers.length} Followers</div> : <div className="profile-header-stats-item">Loading...</div>}
                        </div>
                    </div>
                </div>

                <div className="profile-menu-container">
                    <div className="profile-menu-item-container" onClick={() => setStatus(status = 0)}>
                        <img src={heart} alt="Img" className="profile-menu-item-icon"></img>
                        <div className="profile-menu-item-text">Available Items</div>
                    </div>
                    <div className="profile-menu-item-container" onClick={() => setStatus(status = 1)}>
                        <img src={reserve} alt="Img" className="profile-menu-item-icon"></img>
                        <div className="profile-menu-item-text">Rented</div>
                    </div>
                </div>

                <div className="profile-items-container">

                    {(status === 0) ? <div className="profile-items-favourites-container" id="favouritesContainer">
                        {itemsForRent.map((item) => (
                            <StandardCard key={item._id} item={item} />
                        ))}
                        </div> : <Fragment></Fragment>}

                    {(status === 1) ? <div className="profile-items-reserved-container" id="reservedContainer">
                        {itemsRentedOut.map((item) => (
                            <ReservedCard key={item._id} item={item} />
                        ))}
                    </div> : <Fragment></Fragment>}

                </div>

            </div>
        </section>

        </div>
    </main>
    <Footer />

</div>
</Fragment>
    );
};

ProfileBusiness.propTypes = {
    auth: PropTypes.object.isRequired,
    get_items_for_rent: PropTypes.func.isRequired,
    get_items_rented_out: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {get_items_for_rent, get_items_rented_out})(ProfileBusiness);