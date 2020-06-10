import React, { PropTypes, Fragment } from 'react';


import editorsPick1 from '../../../dummyImages/editorsPick1.png'



const Showcase = props => {
    return (
        <Fragment>

        <section className="section-showcase">
            <div className="showcase-image-container">
                <div className="test-txt">Editors Picks</div>
                <img src={editorsPick1} alt="" className="showcase-image"></img>
            </div>
        </section>
            
        </Fragment>
    );
};

Showcase.propTypes = {
    
};

export default Showcase;