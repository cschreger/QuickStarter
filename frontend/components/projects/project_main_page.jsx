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

        if (this.props.projects !== {}) {
            return <div></div>
        }

        const sidebarProjects = Object.values(this.props.projects).slice(13,16);
        const featuredProject = this.props.projects[1];

        debugger

        return (
            <div className="project-index-container">
            <div className="featured-project-container">
                <h4>FEATURED PROJECT</h4>
                {/* <Link to={'/projects'}> */}
                    <div className='featured-media'>Media</div>
                    {/* <img src={project.media} /> */}
                    <h3>Finite: An Urgent Documentary</h3>
                    <span className="featured-project-description">This documentary will follow the frontline activists
                        fighting the fossil fuel industry.
                    </span>
                    <h3 className="featured-project-title">{featuredProject.title}</h3>
                    {/* <span className="featured-project-description">{featuredProject.description}</span> */}
                    {/* <span className="featured-project-author">By {featuredProject.creator.name} </span> */} 
                {/* </Link> */}
                {/* link to author page? how real site does// how much "true cloning*/}
            </div>

            <div className="recommended-sidebar-container">
                <h4>RECOMMENDED FOR YOU</h4>
                <ul className="recommended-sidebar-projects">  
                    {/* {sidebarProjects.map((project, i) => ( */}
                        {/* <li key={i} className="sidebar-project"> */}
                            {/* <div className="sidebar-image"> */}
                                {/* <Link to={`projects/${project.id}`}> */}
                                    {/* <img src={project.media}/> */}
                                {/* </Link> */}
                            {/* </div> */}
                            <div className="sidebar-details">
                                {/* <Link to={`projects/${project.id}`}>{project.title}</Link> */}

                                <div>
                                    {/* <span className="funded-percentage">Calc Funded</span> */}
                                    {/* <span className="sidebar-author">By {project.creator.name}</span> */}
                                </div>
                            </div>
                        {/* </li> */}
                    {/* ))} */}
                </ul>

            </div>

        </div>
        )
    }


}

export default ProjectMainPage;