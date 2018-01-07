import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from './Home';
import Architecture from './Architecture';
import Interior from './Interior';
import About from './About';
import Contacts from './Contacts';
import Project from './Project';

class App extends Component {

    render() {

        return(
            <div className='mainContainer'>
                <div className='innerMainContainer'>

                    <header>

                        <div className='logoContainer'>
                            <h4 className='logoText'><span className='go'>GO</span>architects</h4>
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
                                    <Link to='/about'>About us</Link>
                                </li>
                                <li>
                                    <Link to='/contacts'>Contacts</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </header>

                    <Route exact path='/' component={Home}/>
                    <Route path='/architecture' component={Architecture} />
                    <Route path='/project/:id' component={Project} />
                    <Route path='/interior' component={Interior} />
                    <Route path='/about' component={About} />
                    <Route path='/contacts' component={Contacts} />
                    
                </div>
            </div>
        );

    }

}

export default withRouter(App);