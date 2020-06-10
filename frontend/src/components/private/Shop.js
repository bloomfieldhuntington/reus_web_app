// MARK:- IMPORTS
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// actions
import { get_all_items_user } from '../../actions/item';
// css
import '../components.css'
// components
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar';
import Footer from '../common/footer/Footer';

import Showcase from '../common/showcase/Showcase';
import StandardCard from '../common/cards/StandardCard';
import SectionCard from '../common/cards/SectionCard';
// Images

const Shop = ({item: {items}, get_all_items_user}) => {
    useEffect(() => {
        get_all_items_user();
    }, [get_all_items_user])

    

    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">

            

            <div className="contentbox">

            {/* SECTION PAGE NAVIGATION */}
            <div className="section-navigation-container">
            <div className="section-navigation-title">Shop</div>
            <div className="section-navigation-links-container">
                <div className="section-navigation-link">Dame</div>
                <div className="vertical-divider">|</div>
                <div className="section-navigation-link">Herre</div>
                <div className="vertical-divider">|</div>
                <div className="section-navigation-link">Barn</div>
            </div>
            </div>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src="" alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>

        {/* ITEM SHOWCASE */}
        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

                {items.slice(0, 16).map((item) => (
                    <StandardCard key={item._id} item={item} />
                ))}

            </div>

        </section>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src="" alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>

        {/* ITEM SHOWCASE */}
        <section className="section">

            <div className="section-title">For deg: Vesker</div>

            <div className="section-content-container">

            {items.slice(16, 32).map((item) => (
                    <StandardCard key={item._id} item={item} />
                ))}

            </div>

        </section>

        {/* BANNER */}
        <div className="section-banner">
            <div className="section-banner-image-container">
                <img src="" alt="BANNER" className="section-banner-image"></img>
            </div>
        </div>



{/* END */}
            </div>
        </main>

        <Footer />
        
    </div>
</Fragment>
    );
};

Shop.propTypes = {
    item: PropTypes.object.isRequired,
    get_all_items_user: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { get_all_items_user })(Shop);