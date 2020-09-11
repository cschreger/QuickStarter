import React from 'react';
import {Link} from 'react-router-dom';
import CategoryBar from '../category/category_bar';

class UserProjects extends React.Component {

        constructor(props){
            super(props)

            this.handleSubmit = this.handleSubmit.bind(this);
        }

        componentDidMount() {
            this.props.fetchProjects();
        }

        handleSubmit(e) {
            e.preventDefault();
            this.props.deleteProject(parseInt(e.target.id));
        }

        //modal window pops up for edit project
        //then work on backing constraints (more that minimum, etc.)
        handleSubmit2(e) {
            e.preventDefault();
            this.props.editProject(parseInt(e.target.id))
        }



        render() {
            
            const userProjects = this.props.userProjects

            if(userProjects.length === 0) {
                return (
                <div> You don't have any projects to view!</div>
                )
                
            } else {
                return (
                <>
                <CategoryBar />
                <div className='user-projects-container'>
                <h2 className="my-projects-header">My Quickstarter Projects:</h2>
                <ul className='user-projects'> 
                    {userProjects.map((project,i) => (
                        <li key={i}>
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>

                            <button 
                            id={`${project.id}`}
                            onClick={this.handleSubmit}>Delete Project (CANNOT UNDO)</button>

                            <button onClick={this.editProject}>Edit Project</button>
                        </li>
                    ))}
                </ul>
                </div>
                </>
                )
            }
        }
    
}

export default UserProjects;