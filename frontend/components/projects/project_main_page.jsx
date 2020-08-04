import React from 'react';
import {Link} from 'react-router-dom';
// import CategoryBar from '../components/category/category_bar'


class ProjectMainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchProjects();
    }

    
    
    render () {
        debugger
        if (this.props.projects.length === 0) {
            return <div></div>
        }

        const sidebarProjects = Object.values(this.props.projects).slice(13,16);
        const featuredProject = this.props.projects[13];

        debugger

        return (
            <div className="project-index-container">
            <div className="featured-project-container">
                <h4>FEATURED PROJECT</h4>
                <Link to={`/projects/${featuredProject.id}`}>
                    <img src={featuredProject.media} />
                    <h3 className="featured-project-title">{featuredProject.title}</h3>
                    <span className="featured-project-description">{featuredProject.description}</span>
                    <br></br>
                    <br></br>
                    <span className="featured-project-author">By {featuredProject.creator_id} </span> 
                </Link>
            </div>

            <div className="recommended-sidebar-container">
                <h4>RECOMMENDED FOR YOU</h4>
                <ul className="recommended-sidebar-projects">  
                    {sidebarProjects.map((project, i) => (
                        <li key={i} className="sidebar-project">
                            <div className="sidebar-image">
                                <Link to={`projects/${project.id}`}>
                                    <img src={project.media}/>
                                </Link>
                            </div>
                            
                            <div className="sidebar-details">
                                <Link to={`projects/${project.id}`}>{project.title}</Link>

                                <div>
                                    <span className="funded-percentage">Calc Funded</span>
                                    <span className="sidebar-author">By {project.creator_id}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
        )
    }


}

export default ProjectMainPage;