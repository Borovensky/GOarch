import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

import Project from './Project'

class Architecture extends Component {

    render() {

        const { match } = this.props;
 
        return(
            <div>
                <h1>Architecture</h1>
                <hr/>
                <ul>
                    <li><Link to='/project/project1'>Project1</Link></li>
                    <li><Link to='/project/project2'>Project2</Link></li>
                    <li><Link to='/project/project3'>Project3</Link></li>
                </ul>

            </div>
            
        );

    }

}

export default Architecture;