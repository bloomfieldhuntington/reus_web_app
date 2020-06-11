// MARK:- IMPORTS
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes, {} from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// actions
import {get_one_item} from '../../actions/item';
import { uploadFile, displayImage } from '../../actions/uploads';
// components
import Navbar from '../common/navbar/Navbar';
import Sidebar from '../common/sidebar/Sidebar';
import Footer from '../common/footer/Footer';
// Images
import settings from '../../images/icons_large/settings.png'

const ItemDetailsBusiness = ({
    get_one_item,
    match,
    auth: { user },
    item: { item },
    uploadFile,
    displayImage
}) => {
    useEffect(() => {
        get_one_item(match.params.id);
        displayImage(match.params.id);
    }, [get_one_item, match.params.id, displayImage])

    // Image Container

    // Desciption Container
    function DesciptionContainer() {
        if (!item) {
            return <Fragment>Loading...</Fragment>
        } else {
            return <div className="section-details-description-container">
                            <div className="details-description-contentbox">

                                <div className="details-title-container">
        <div className="details-title">{item.title}</div>
                                    <div className="details-title-icon-container" >
                                        <img src={settings} alt="Icn" className="details-title-icon"></img>
                                    </div>
                                </div>

        <div className="details-text">{item.description}</div>
                                <div className="details-price">{item.price}</div>

                                <div className="details-button">Accept</div>
                                <div className="details-button">Edit</div>

                                <div className="details-text-b">Produktet finnes her:</div>

                                    {item.locations.map((location, index) => (
                                <div className="details-locations-container" key={index}>
                                        <div className="location-item">{location}</div>
                                </div>
                                    ))}

                            </div>
                        </div>
        }

    }

    // IMAGE UPLOAD FORM TEMP
    // FileUpload
    const [file, setFile] = useState();
    const [filename, setFilename] = useState('Choose file');
    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('item_id', item._id)
        uploadFile(formData);
        setFilename("Delivered")
    }

    function UploadImageForm() {
        if (!item) {
            return <Fragment>Loading...</Fragment>
        } else {
            return (
                <form onSubmit={onSubmit}>
                    <input type="file" name="file" onChange={onChange}></input>
                    <label htmlFor="file">{filename}</label>

                    <button type="submit" value="Submit">Add Image</button>
                </form>
            )
        }
    }

    // SHow image testing
    
    
    return (
<Fragment>

    <div className="root-container">
        <Navbar/>
        <Sidebar />

        <main className="main">

        <div className="section-details">

                    <div className="section-details-content-container">

                        <div className="section-details-images-container">

                            <div className="section-details-main-image-container">
                                <img src="" alt="Img" className="section-details-main-image"></img>
                            </div>

                            <div className="section-details-image-selection">
                                <div className="section-details-image-small-container">
                                    <img src="" alt="Img" className="section-details-image-small"></img>
                                </div>
                                <div className="section-details-image-small-container">
                                    <img src="" alt="Img" className="section-details-image-small"></img>
                                </div>
                                <div className="section-details-image-small-container">
                                    <img src="" alt="Img" className="section-details-image-small"></img>
                                </div>
                                <div className="section-details-image-small-container">
                                    <img src="" alt="Img" className="section-details-image-small"></img>
                                </div>
                            </div>

                        </div>

                        <DesciptionContainer />

                    </div>

                </div>

                {/* <UploadImageForm /> */}
            

            <div className="contentbox">
        {/* START */}




        {/* END */}
            </div>
        </main>

        <Footer />
        
    </div>
</Fragment>
    );
};

ItemDetailsBusiness.propTypes = {
    get_one_item: PropTypes.func.isRequired,
    uploadFile: PropTypes.func.isRequired,
    displayImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {
    get_one_item,
    uploadFile,
    displayImage
})(withRouter(ItemDetailsBusiness));