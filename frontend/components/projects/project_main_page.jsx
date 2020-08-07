import React from 'react';
import {Link} from 'react-router-dom';
import CategoryBar from '../category/category_bar';
import CategoryFooter from '../category/category_footer';
import Footer from '../nav_bar/footer';


class ProjectMainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    
    
    render () {

        if (this.props.projects.length <= 0) {
            return <div></div>
        }
        const projects = this.props.projects
        const sidebarProjects = projects.slice(24, 27);
        const featuredProject = projects[13];
        const freshFaces = projects.slice(projects.length - 5, projects.length - 1)

        return (            
            <><CategoryBar />
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
                                    <img id="sidebar-media"src={project.media}/>
                                </Link>
                            </div>
                            
                            <div className="sidebar-details">
                                <div id="top-sidebar-title"><Link to={`projects/${project.id}`}>{project.title}</Link></div>

                                    <span className="funded-percentage">Calc Funded</span>
                                <Link to={`projects/${project.id}`}>
                                    <span className="sidebar-author">By {project.creator_id}</span>
                                </Link>
                         
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

            </div>
                
            <div className='discover-footer'>
                <h2>Discover the best and brightest projects on Quickstarter</h2>
                <h4>Click below to View All Projects</h4>
                <Link to="/explore"><button>
                    Discover Projects
                </button></Link>
            </div>

        <div className="fresh-faces-container">
            <ul className="fresh-faces-projects">
                {freshFaces.map((project, i) => (
                    <li key={i} className="fresh-project">
                        <div className="fresh-image">
                            <Link to={`projects/${project.id}`}>
                                <img id="fresh-media" src={project.media} />
                            </Link>
                        </div>

                        <div className="sidebar-details">
                            <div id="top-sidebar-title"><Link to={`projects/${project.id}`}>{project.title}</Link></div>

                            <span className="funded-percentage">Calc Funded</span>
                            <Link to={`projects/${project.id}`}>
                                <span className="sidebar-author">By {project.creator_id}</span>
                            </Link>

                        </div>
                    </li>
                ))}
            </ul>
        </div>

        <div className="category-footer"><CategoryFooter /></div>
        <Footer />
        </>
        )
    }


}

export default ProjectMainPage;