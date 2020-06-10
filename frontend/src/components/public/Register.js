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
// components
import Alert from '../utils/Alert';
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar'
import Footer from '../common/footer/Footer';
// actions
import { register_user } from '../../actions/auth_user';
import { set_alert } from '../../actions/alert';


const Register = ({ register_user, isAuthenticated, set_alert }) => {

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
        set_alert('Passwords must match', 'failed');
    } else {
        register_user({username, email, password});
    }
}

// Redirects to dash if auth
if (isAuthenticated === true) {
    return <Redirect to="/profile" />
}

    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">
            <div className="contentbox">

            <main className="main">
            <div className="contentbox">
            <section className="section">
            <div className="section-content-container-col">

                <form onSubmit={onSubmit} className="section-form">
                <div className="section-title-alt">Register</div>
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
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="password" 
                        placeholder="Repeat Password" 
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>

                    <button type="submit" className="details-button" value="">Register</button>
                    <Link to="/login" className="form-text" >Already have an account</Link>
                    <Alert />
                </form>
                <div className="button-options-container">
                <Link to="/business/register" className="details-button-light" >Business Register</Link>
                <Link to="/business/login" className="details-button-light" >Business Login</Link>
                </div>
            </div>

        </section>
            </div>
        </main>

            </div>
        </main>
        <Footer />
    </div>
</Fragment>
    );
};

Register.propTypes = {
    register_user: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    set_alert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register_user, set_alert })(Register);