import React, { PropTypes, Fragment } from 'react';
import './form.css'

// Images
import profile from '../../../images/Profile.png';
import Register from '../../../images/Register.png';
import key from '../../../images/key.png';

const Form = props => {
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