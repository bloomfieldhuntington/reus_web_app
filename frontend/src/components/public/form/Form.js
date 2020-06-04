import React, { PropTypes, Fragment } from 'react';
import './form.css'

const Form = props => {
    return (
        <Fragment>

<section className="section">
            <div className="section-content-container-col">

                <div className="section-title-alt">Registrer</div>

                <form action="" className="section-form">
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
                    </div>
                    <div className="form-input-container">
                        <img src="./icons8-location-96.png" alt="" className="form-input-icon"></img>
                        <input type="text" placeholder="Username" className="form-input"></input>
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