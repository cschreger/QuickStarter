import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            goalFunding: 0,
            categoryId: 0,
            locationId: 0,
            campaignEndDate: ""
        }
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render () {
        
        return (
            <div className="project-form-page">
                <span className="page-number">1 of 3</span>
                <div className="project-create-form-container">
                <form className="project-create-form">
                    <h2>First, let's get you set up.</h2>
                    <h4>Pick a project category to connect with a specific
                        community. You can always update this later.
                    </h4>
                    <div className="category-dropdown">
                        Select your category
                    </div>
                <div className="button-container">
                <p className="nice-message">Nice to see you.</p>
                <button className="next-button">Next: Project idea</button>
                </div>
                </form>
                </div>
            </div>
        )
    }
    

};

export default ProjectForm;