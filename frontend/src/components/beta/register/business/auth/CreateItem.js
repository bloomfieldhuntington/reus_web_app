import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import { create_item } from '../../../../../actions/item';


const CreateItem = ({ create_item, isAuthenticated, history }) => {

    // Register Form
const [formData, setFormData] = useState({
    internalReference: '',
    brand: '',
    title: '',
    subTitle: '',
    description: '',
    size: '',
    category: '',
    segment: '',
    price: '',
    productImages: []
})
const { 
    internalReference,
    brand,
    title,
    subTitle,
    description,
    size,
    category,
    segment,
    price,
    productImages
} = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
const onSubmit = async (e) => {
    e.preventDefault();
    create_item(formData);
    history.push('/business/profile');
}

// Redirects to dash if auth
if (isAuthenticated === false) {
    return <Redirect to="/" />
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
                <div className="section-title-alt">Create Item</div>
                    <div className="form-input-container">
                        <img src={profile} alt="" className="form-input-icon"></img>

                        <input 
                        type="text" 
                        placeholder="Internal Reference" 
                        name="internalReference"
                        value={internalReference}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={Register} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="Brand" 
                        name="brand"
                        value={brand}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="title" 
                        name="title"
                        value={title}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="subtitle" 
                        name="subTitle"
                        value={subTitle}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="description" 
                        name="description"
                        value={description}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="size" 
                        name="size"
                        value={size}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="category" 
                        name="category"
                        value={category}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="segment" 
                        name="segment"
                        value={segment}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>
                    <div className="form-input-container">
                        <img src={key} alt="" className="form-input-icon"></img>
                        
                        <input 
                        type="text" 
                        placeholder="price" 
                        name="price"
                        value={price}
                        onChange={e => onChange(e)}
                        required
                        className="form-input"
                        ></input>

                    </div>

                    <button type="submit" className="details-button" value="">Create Item</button>

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

CreateItem.propTypes = {
    create_item: PropTypes.func.isRequired
    
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { create_item })(CreateItem);