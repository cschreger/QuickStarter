import React from 'react';
import {Link} from 'react-router-dom';
// import RewardShowContainer from '../../components/rewards/r'

class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        debugger
        this.props.fetchProject(this.props.match.params.projectId)
    }

    componentWillUnmount() {
        debugger
    }

    render () {
        // if proj not defined - return null 
        if (!this.props.project){
            this.props.fetchProject(this.props.match.params.projectId)
        }
        
        const {project, creator, currentUser} = this.props;
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

        const locations = {
            1: "United States/North America",
            2: "Europe",
            3: "Asia",
            4: "Africa",
            5: "Australia",
            6: "South America",
            7: "Antarctica"
        }

        debugger
        // let funding = `Backed amt of $${project.goal_funding} goal`
        return (
        <div className='project-show-main'>

            <div className='project-show-main-content'>
                <div className='project-title-description-container'>
                    <h2>{project.title}</h2>
                    <h4>{project.description}</h4>
                </div>
            
                <div className='project-show-media-details-container'>
                    <div className='project-show-media'>
                        <img src={project.media}/>
                    </div>
                </div>
            
                <div className="project-show-details">
                    <div className='pledge-amt'><h2>${funding}</h2></div>
                    <div className='backer-amt'><h2># of Backers</h2></div>
                    <div className='remaining-days-amt'><h2>Calc days to go</h2></div>
                    <Link to={`/projects/${project.id}/rewards`}>
                    <button className='backing-button'>Back this project</button>
                    </Link>
                </div>
        
                <div className='project-show-media-info-footer'>
                    <i className="far fa-compass">{categories[project.category_id]}</i>  
                    <i className="fas fa-map-marker-alt">{locations[project.location_id]}</i>                 
                </div>
                    
            
            
            
            </div>
        </div>

        )
    }

}

export default ProjectShow;