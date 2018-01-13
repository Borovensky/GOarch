import React, { Component } from 'react'

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
        this.setState({ width: window.innerWidth, height: window.innerHeight - 60 });
    }

    render() {

        return(
            <div className='homeContainer'>

                <div className='backgroungImageContainer' style={{ width: this.state.width + 'px', height: this.state.height + 'px'}}>
                    <div className='image' style={{backgroundImage: 'url(./img/main1920x1080.png)'}}></div>    
                </div>

                <div className='sloganContainer' style={{height: this.state.height / 1.2 + 'px'}}>
                    <h1 className='slogan'>Simplicity lives here!</h1>
                </div>

                <div className='contentContaiver'>
                    <div className='innerContentContaiver'>

                        <div className='contentHeader'>
                            <h3 className='header'>our way to our dream</h3>
                        </div>

                        <div className='paragraph'>
                            <p className='text'>October 18, 2012</p>
                            <br/>
                            <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet dignissimos accusamus facilis recusandae vitae temporibus deserunt vero laborum quidem rem dolores et exercitationem ipsum perspiciatis neque non modi ut.</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>

                    </div>
                </div>

            </div>
        );

    }

}

export default Home;