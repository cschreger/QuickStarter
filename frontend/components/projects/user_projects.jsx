import React from 'react';
import {Link} from 'react-router-dom';

class UserProjects extends React.Component {

        constructor(props){
            super(props)
        }

        componentDidMount() {
            this.props.fetchProjects();
        }

        render() {
            
            const userProjects = this.props.userProjects

            if(userProjects.length === 0) {
                return (
                <div> You don't have any projects to view!</div>
                )
                
            } else {
                return (
                <div className='user-projects-container'>
                <ul className='user-projects'> My projects:
                    {userProjects.map((project,i) => (
                        <li key={i}>
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                        </li>
                    ))}
                </ul>
                </div>
                )
            }
        }
    
}

export default UserProjects;