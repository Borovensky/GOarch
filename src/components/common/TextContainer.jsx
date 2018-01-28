import React from 'react';

const TextContainer = ({ content }) => {

    return(
        <div className='paragraph'>
            <p className='text'>{content.title}</p>
            <br/>
            <br/>
            <p className='text'>{content.text}</p>
        </div>
    )

}
export default TextContainer;