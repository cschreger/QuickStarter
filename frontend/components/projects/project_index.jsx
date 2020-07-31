import React from 'react';

class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchProjects();
    }

    render

}


export default ProjectIndex;