import React from 'react';
import CategoryFooter from './category_footer';
import Footer from '../nav_bar/footer';
import CategoryBar from './category_bar';
import {Link} from 'react-router-dom'

class CategoryProjects extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {

        const categories = {
            1: 'Arts',
            2: 'Comics',
            3: 'Crafts',
            4: 'Dance',
            5: 'Design',
            6: 'Fashion',
            7: 'Film & Video',
            8: 'Food',
            9: 'Games',
            10: 'Journalism',
            11: 'Music',
            12: 'Photography',
            13: 'Publishing',
            14: 'Technology',
            15: 'Theater'
        }
        
        const projects = this.props.projects
        return (
            <>
            <CategoryBar />
            <div className="projects-index-wrapper">
                <div className="projects-index-container">
                    <div className="projects-amt">Explore {projects.length} projects</div>
                    <ul className="projects-index">  {/*flexwrap */}
                        {projects.map((project, i) => (
                            <li className='project-index-item' key={i}>
                                <Link to={`/projects/${project.id}`}><div className='index-title'>{project.title}</div>
                                    <img src={project.media} /></Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <CategoryFooter />
            <Footer />
            </>
        )
    }
}

export default CategoryProjects;