import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// css
// images
import profile from '../../images/Profile.png'
import emailImage from '../../images/Register.png';
import key from '../../images/key.png';
import test from '../../dummyImages/lastNedAppen.png';
// components
import Alert from '../utils/Alert';
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar'
import Footer from '../common/footer/Footer';
// actions
import { login_business } from '../../actions/auth_business';

const LoginBusiness = ({ login_business, isAuthenticated }) => {

        // Register Form
const [formData, setFormData] = useState({
    email: '',
    password: ''
})
const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
const onSubmit = async (e) => {
    e.preventDefault();
    login_business({email, password});
}

// Redirects to dash if auth
if (isAuthenticated === true) {
     return <Redirect to="/business/profile" />
}

    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">

            <div className="contentbox">

            
            <section className="section">

            <div className="section-content-container-col">

                <div className="form-showcase-container" >

                <div>
                <form onSubmit={onSubmit} className="section-form">
                <div className="section-title-alt">Business Login</div>
                    
                    <div className="form-input-container">
                        <img src={emailImage} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>

                    <button type="submit" className="details-button" value="">Login</button>
                    <Link to="/business/register" className="form-text" >Create an account</Link>
                    <Alert />
                </form>
                
                <div className="button-options-container">
                <Link to="/register" className="details-button-light" >Register</Link>
                <Link to="/login" className="details-button-light" >Login</Link>

                </div>

                </div>

                <img src={test} className="form-showcase-image" ></img>

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

LoginBusiness.propTypes = {
    login_business: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login_business })(LoginBusiness);