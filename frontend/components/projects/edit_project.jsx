import React from 'react';
import project_index_container from './project_index_container';

class EditProject extends React.Component {

constructor(props){
    super(props)

    this.state = {
        title: "",
        description: "",
        goalFunding: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId)
}

handleInput(field) {
    return (e) => {
        this.setState({ [field]: e.currentTarget.value })
    }
}

handleSubmit(e) {
   e.preventDefault();

   if (!this.props.currentUser) {
       this.props.history.push("/login")
   }

   let updatedTitle = this.props.project.title 
   let updatedDescription = this.props.project.description
   let updatedGoalFunding = this.props.project.goal_funding
   

   if (this.state.title != false) {
        updatedTitle = this.state.title
   } else {
        updatedTitle = this.props.project.title
   }

   debugger
   if (this.state.description != false) {
      updatedDescription = this.state.description;
   } else {
      updatedDescription = this.props.project.description;
   }

   if (this.state.goalFunding != false) {
      updatedGoalFunding = this.state.goalFunding;
   } else {
      updatedGoalFunding = this.props.project.goal_funding;
   }

   const projectUpdates = {
       id: this.props.project.id,
       title: updatedTitle,
       description: updatedDescription,
       goal_funding: updatedGoalFunding
   }

   debugger
   this.props.updateProject(projectUpdates)
     .then(() => this.props.history.push(`/projects/${this.props.project.id}`))
}

render() {

    if (!this.props.project) {
        return <div></div>
    }
    const { project, currentUser } = this.props;


    return (
        <div className="edit-main-container">
        <div className="edit-info-container">
            <h2>Edit your project</h2>
            <h4>We understand...ideas change. Make updates below to your campaign
                title, description, or goal funding amount. 
                <br></br><br></br>
                Any fields that are not updated will retain the campaign's previous information.
            </h4>
        </div>

        <div className="edit-form-container">
        <form className="edit-project-form">

            <div className="edit-selections">
                <label className="edit-title">Title
                            <input type="text"
                        value={this.state.title}
                        placeholder={project.title}
                        onChange={this.handleInput('title')}
                    />
                </label>

                <label className="edit-funding">Goal Funding
                        <input type="number"
                        value={this.state.goalFunding}
                        placeholder={project.goal_funding}
                        onChange={this.handleInput('goalFunding')}
                    />
                </label>

                <label className="edit-description">Description
                            <input type="text"
                        value={this.state.description}
                        placeholder={project.description}
                        onChange={this.handleInput('description')}
                    />
                </label>
            </div>

            <button onClick={this.handleSubmit}>Update Project</button>
        </form>
        </div>
    </div>
    )
}

}

export default EditProject;