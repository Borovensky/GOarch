import React, { Component } from 'react';
import TextContainer  from './common/TextContainer';
import ImageLinkContainer from './common/ImageLinkContainer';

var content = {
    title: 'October 18, 2012',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut.'
}

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            width: 0,
            height: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight - 80 });
    }



    render() {

        return(
            <div className='pageContainer'>

                <div className='backgroungImageContainer' style={{ width: this.state.width + 'px', height: this.state.height + 'px'}}>
                    <div className='image' style={{backgroundImage: 'url(./img/main1920x1080.png)'}}></div>    
                </div>

                <div className='sloganContainer' style={{height: this.state.height / 1.2 + 'px'}}>
                    <h1 className='slogan'>Simplicity lives here!</h1>
                </div>

                <div className='contentContaiver'>
                    <div className='innerContentContaiver'>
                        <div className='contentHeader'>
                            <h4 className='header'>our way to our dream</h4>
                        </div>
                        <TextContainer
                            content={content}
                        />

                        <TextContainer
                            content={content}
                        />
                    </div>

                    <div className='innerImageLinkContainer'>
                        <ImageLinkContainer 
                            image={'url(./img/bg.png)'}
                            linkText={''}
                            link={''}
                        />
                    </div>

                    <div className='innerContentContaiver'>
                        <TextContainer 
                            content={content}
                        />
                    </div>

                </div>

            </div>
        );

    }

}

export default Home;