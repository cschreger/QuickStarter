import React from 'react';
import {Link} from 'react-router-dom';
import RewardItem from '../rewards/reward_item';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            numClicks: 0,
            pledgeAmt: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchRewards(this.props.match.params.projectId);
        // this.props.fetchBackings();
    }


    handleScroll(e) {
        e.preventDefault();
        let rewards = document.getElementById("rewards-container")
        rewards.scrollIntoView({behavior: 'smooth'});
    }


    handleClick(e) {
        e.preventDefault();

        this.setState({
            clicked: !this.state.clicked,
            numClicks: this.state.numClicks += 1
        })

    }


    handleSubmit(e){
        e.preventDefault();
        debugger
        const backing = {
            backer_id: this.props.currentUser.id, 
            project_id: this.props.project.id,
            reward_id: 7
        }

        const projectUpdates = {
            id: this.props.project.id,
            pledged_amt: (this.props.project.pledged_amt + parseInt(this.state.pledgeAmt))
        }

        this.props.createBacking(backing)
            .then(() => this.props.updateProject(projectUpdates))
            .then(() => this.setState({
                clicked: false,
                pledgeAmt: 0
            }))
        
        let element = document.getElementById("project")
        element.scrollIntoView({behavior: 'smooth'});
    }


    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    render () {

        if (!this.props.project){
            return <div></div>
        }
        
        const {clicked, pledgeAmt} = this.state
        // const rewards = this.props.project.rewards
        const {project, rewards, currentUser} = this.props;
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

        return (
        <div id="project" className='project-show-main'>

            <div className='project-show-main-content'>
                <div className='project-title-description-container'>
                    <h2>{project.title}</h2>
                    <h4>{project.description}</h4>
                </div>
            
                <div className='project-show-media-details-container'>
                    <div className='project-show-media'>
                        <img src={project.media}/>
                    </div>
                    <div className='project-show-media-info-footer'>
                        <i className="far fa-compass">{categories[project.category_id]}</i>  
                        <i id="loc" className="fas fa-map-marker-alt">{locations[project.location_id]}</i>                 
                    </div>
                </div>
            
                <div className="project-show-details">
                    <div className='funded-amt'>${project.pledged_amt}</div>
                    <div className='pledge-amt'><h2>pledged of ${project.goal_funding} goal</h2></div>
                    <div className='backer-amt'><h2># of Backers</h2></div>
                    <div className='remaining-days-amt'><h2>Calc days to go</h2></div>
                    <button 
                    className='backing-button'
                    onClick={this.handleScroll}>Back this project</button>
                </div>
            </div>

            <div className='campaign-container'>
                <div className="campaign-headbar">
                    <div className="community">Community</div>
                </div>

                <div className="campaign-story">
                <div id='rewards-container'>
                    <ul className="reward-list">
                        <li className={`default-reward ${clicked === true ? "clicked" : ""}`} onClick={this.handleClick}>
                            <div className="pledge-title">
                                <h2>Pledge without a reward</h2>
                            </div>

                            <div className="reward-checkout">
                                <div className="pledge-input">
                                <input 
                                type="text"
                                placeholder="Pledge any amount"
                                onChange={this.handleInput('pledgeAmt')}
                                />
                                </div>

                                <div className="backing-statement">
                                    <h3>Back it because you believe in it.</h3>
                                    <h5>Support the project for no reward, just 
                                        because it speaks to you</h5>
                                </div>
                            </div>

                            <div className={`submit-backing container ${clicked === true ? "clicked" : ""}`}>
                                <button 
                                className={`back-reward ${clicked === true && pledgeAmt ? "ready" : ""}`}
                                onClick={this.handleSubmit}
                                >Back This Project</button>
                            </div>
                        </li>

                        {rewards.map((reward,i) => (
                            <li key={i}>
                                <RewardItem
                                project={project} 
                                reward={reward}
                                currentUser={this.props.currentUser}
                                createBacking={this.props.createBacking}
                                updateProject={this.props.updateProject}
                                />

                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </div>

        )
    }

}

export default ProjectShow;