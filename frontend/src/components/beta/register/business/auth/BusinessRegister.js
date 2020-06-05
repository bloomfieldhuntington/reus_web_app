import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// css
import './form.css'
// images
import profile from '../../../../../images/Profile.png';
import Register from '../../../../../images/Register.png';
import key from '../../../../../images/key.png';
// components
import Navbar from '../../../../public/navbar/Navbar';
import Sidebar from '../../../../public/sidebar/Sidebar'
import Footer from '../../../../public/footer/Footer';
// actions
import { register_business } from '../../../../../actions/auth_business';


const BusinessRegister = ({register_business, isAuthenticated}) => {

    // Register Form
const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
})
const { username, email, password, password2 } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
        console.log('Password 1 must mach password 2');
    } else {
        register_business({username, email, password});
    }
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

                <form onSubmit={onSubmit} className="section-form">
                <div className="section-title-alt">Registrer</div>
                    <div className="form-input-container">
                        <img src={profile} alt="" className="form-input-icon"></img>

                        <input 
                        type="text" 
                        placeholder="Username" 
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={Register} alt="" className="form-input-icon"></img>
                        
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
                        type="text" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="Repeat Password" 
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>

                    <button type="submit" className="details-button" value="">Register</button>

                </form>

            </div>
        </section>
            </div>
        </main>
        <Footer />
    </div>
            
        </Fragment>
    );
};

BusinessRegister.propTypes = {
    register_business: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register_business })(BusinessRegister);