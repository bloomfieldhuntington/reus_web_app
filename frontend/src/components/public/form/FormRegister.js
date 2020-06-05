import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// css
import './form.css'
// images
import profile from '../../../images/Profile.png';
import Register from '../../../images/Register.png';
import key from '../../../images/key.png';
// actions
import { register_business } from '../../../actions/auth_business';


const Form = (register_business) => {

    // Register Form
const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
})
const { username, email, password, password2 } = formData;

const onChange = (e) => setFormData({...formData, [e.target.username]: e.target.value});
const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
        console.log('Password 1 must mach password 2');
    } else {
        register_business(username, email, password);
    }
}

    return (
        <Fragment>

<section className="section">
            <div className="section-content-container-col">

                <form action="" className="section-form">
                <div className="section-title-alt">Registrer</div>
                    <div className="form-input-container">
                        <img src={profile} alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src={Register} alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Email" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Password" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Repeat password" className="form-input"></input>
                    </div>

                    <div className="details-button">Register</div>

                </form>

            </div>
        </section>
            
        </Fragment>
    );
};

Form.propTypes = {
    
    
};

export default Form;