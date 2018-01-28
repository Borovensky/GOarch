import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextContainer  from './common/TextContainer';
import ImageLinkContainer from './common/ImageLinkContainer';

import Project from './Project'


var content = {
    // title: '',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut.'
}

class Architecture extends Component {

    render() {
 
        return(
            <div className='pageContainer'>
                <div className='contentContaiver'>

                    <div className='innerContentContaiver'>
                        <div className='contentHeader'>
                            <h3 className='pageHeader'>Architecture</h3>
                        </div>
                        <TextContainer
                            content={content}
                        />  
                    </div>

                    <div className='innerImageLinkContainer'>
                        <ImageLinkContainer 
                            image={'url(./img/bg.png)'}
                            linkText={'project - 1'}
                            link={'/project/project1'}
                        />
                    </div>

                    <div className='innerImageLinkContainer'>
                        <ImageLinkContainer 
                            image={'url(./img/bg.png)'} 
                            linkText={'project - 2'}
                            link={'/project/project2'}
                        />
                    </div>

                    <div className='innerImageLinkContainer'>
                        <ImageLinkContainer 
                            image={'url(./img/bg.png)'}
                            linkText={'project - 3'}
                            link={'/project/project3'}
                        />
                    </div>

                </div>

            </div>
            
        );

    }

}

export default Architecture;