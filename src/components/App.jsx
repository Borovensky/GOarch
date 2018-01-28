import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import FA from 'react-fontawesome';

import Home from './Home';
import Architecture from './Architecture';
import Interior from './Interior';
import About from './About';
import Contacts from './Contacts';
import Project from './Project';
import TabsCollapsedMenu from './common/TabsCollapsedMenu';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuDisplay: 'none',
            btnColor: '#000000',
            contentToRender: ''
        }

        this.handleClick = this.handleClick.bind(this);

    } 

    handleClick(renderContent) {
        const { menuDisplay, btnColor } = this.state;

        this.setState({
            menuDisplay: menuDisplay == 'none' ? 'flex' : 'none',
            btnColor: menuDisplay == 'none' ? '#ffffff' : '#000000',
            contentToRender: renderContent
        });
    };

    render() {

        return(
            <div className='mainContainer'>
                
                <TabsCollapsedMenu
                    onClick={this.handleClick}
                    display={this.state.menuDisplay}
                    render={this.state.contentToRender}
                />

                <div className='innerMainContainer'>

                    <header>
                        <div className='logoContainer'>
                            <h5 className='logoText'><span className='go'>GO</span>architects</h5>
                        </div>

                        <div className='headerTabsContainer'>
                            <ul className='headerTabs'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/architecture'>Architecture</Link>
                                </li>
                                <li>
                                    <Link to='/interior'>Interior</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/contacts'>Contacts</Link>
                                </li>
                            </ul>
                        </div>

                    </header>

                    <div className='headerTabsButton' onClick={() => this.handleClick('header')} style={{ color: this.state.btnColor }}>
                        <FA className='buttonIcon' name='bars'/>
                    </div>

                    <Route exact path='/' component={Home}/>
                    <Route path='/architecture' component={Architecture} />
                    <Route path='/project/:id' component={Project} />
                    <Route path='/interior' component={Interior} />
                    <Route path='/about' component={About} />
                    <Route path='/contacts' component={Contacts} />

                    <footer>
                        <div className='footerInner'>
                            <div className='footerLogo'>
                                <h5 className='logoText'><span className='go'>GO</span><span className='Created'>2017. Created by Kate Bulatova</span></h5>  
                            </div>
                            
                            <div className='footerTabsContainer'>
                                <ul className='footerTabs'>
                                    <li>
                                        <Link to='#'>facebook</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>instagram</Link>
                                    </li> 
                                    <li>
                                        <Link to='#'>behance</Link>
                                    </li> 
                                    <li>
                                        <Link to='#'>pinterest</Link>
                                    </li> 
                                </ul>
                            </div>

                            <div className='bottomTabsButton' onClick={() => this.handleClick('footer')} style={{ color: this.state.btnColor }}>
                                <FA className='buttonIcon' name='bars'/>
                            </div>

                        </div>
                    </footer>
                    
                </div>
            </div>
        );

    }

}

export default withRouter(App);