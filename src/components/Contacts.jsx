import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextContainer  from './common/TextContainer';


var content = {
    title: 'What is the cost of a design similar to the ones in your portfolio?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut.'
}

class Contacts extends Component {

    render() {
 
        return(
            <div className='pageContainer'>
                <div className='contentContaiver'>

                    <div className='innerContentContaiver'>
                        <div className='contentHeader'>
                            <h3 className='pageHeader'>Contacts</h3>
                        </div>
                        <div className='contentHeader'>
                            <h3 className='header'>Price</h3>
                        </div>
                        <TextContainer
                        
                            content={content}
                        />  
                    </div>

                    <div className='innerContentContaiverForFeedback'>
                        <div className='contactInfo'>

                        </div>

                        <div className='feedbackForm'>

                        </div>
                    </div>

                </div>

            </div>
            
        );

    }

}

export default Contacts;