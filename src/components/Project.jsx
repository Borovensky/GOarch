import React, { Component } from 'react'

class Project extends Component {

    render() {

        return(
            <h1>{this.props.match.params.id}</h1>
        );

    }

}

export default Project;