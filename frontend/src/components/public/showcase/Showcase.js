import React, { PropTypes, Fragment } from 'react';
import './showcase.css';

const Showcase = props => {
    return (
        <Fragment>

        <section className="section-showcase">
            <div className="showcase-image-container">
                <div className="test-txt">Editors Picks</div>
                <img src="" alt="" className="showcase-image"></img>
            </div>
        </section>
            
        </Fragment>
    );
};

Showcase.propTypes = {
    
};

export default Showcase;