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
import RegisterForm from '../form/FormRegister';
// Images

const Registration = props => {
    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">
            <div className="contentbox">

                <RegisterForm />

            </div>
        </main>
        <Footer />
    </div>
</Fragment>
    );
};

Registration.propTypes = {
    
};

export default Registration;