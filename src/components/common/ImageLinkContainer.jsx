import React from 'react';
import { Link } from 'react-router-dom';

const ImageLinkContainer = ({ image, linkText, link }) => {

    return(
        <div className='imageContainer' style={{backgroundImage: image}}>
            <h2 className='projectHeader'>
                <Link to={link}>{linkText}</Link>
            </h2>
        </div>
    );

}

export default ImageLinkContainer;