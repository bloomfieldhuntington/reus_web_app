// MARK:- IMPORTS
import React, { PropTypes, Fragment } from 'react';
// css

// components
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer';
import Profile from '../../profile/Profile';
import Showcase from '../showcase/Showcase';

import SectionCard from '../cards/SectionCard';
import StandardCard from '../cards/StandardCard';
import ReservedCard from '../cards/SectionCard';
import ItemDetails from '../details/ItemDetails';
import Form from '../form/Form';
// Images

const BaseView = props => {
    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">
            <div className="contentbox">

            </div>
        </main>
        <Footer />
    </div>
</Fragment>
    );
};

BaseView.propTypes = {
    
};

export default BaseView;