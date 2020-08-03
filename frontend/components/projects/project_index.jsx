import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchProjects();
    }

    render () {
        return (
            <div>

            </div>
        )
    }

}


export default ProjectIndex;