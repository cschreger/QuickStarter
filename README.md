# README

**Quickstarter**

Live Demo: [Quickstarter](https://quickstarter-heroku.herokuapp.com/#/)

Quickstarter, a Kickstarter clone, is a fullstack web application for starting creative campaigns that others can support, either for a reward of your choosing or solely out of support.
Quickstarter implements a RoR backend framework (Rails 5.2.4.3/Ruby 2.5.1) with attached PostgreSQL database, React/Redux for frontend rendering, AWS for image hosting & retrieval, and is hosted on Heroku. Quickstarter's main features include:

**Core Features**

* Frontend/Backend User Authentication 
* Ability to create a campaign and view/back others' campaigns
* Create rewards for own campaign and receive rewards from others
* Real-time updated campaign show pages (amount funded, # of backers)
* DB-backed associations between projects, rewards, and backings

**Highlighted Features**

Multi-page creation form
 ![](https://media.giphy.com/media/0tmDsx4V4Xa6vg6tFE/giphy.gif)
<br><br>
Live project-backing feature
 ![](https://media.giphy.com/media/8D21HOiRHERFLJg5ex/giphy.gif)
 
**Featured Code Snippets**

Backing a Project

    handleSubmit(e) {
        e.preventDefault();

        if (!this.props.currentUser) {
            this.props.history.push("/login")
        }

        const backing = {
            backer_id: this.props.currentUser.id,
            project_id: this.props.project.id,
            reward_id: this.props.reward.id
        }

        const projectUpdates = {
            id: this.props.project.id,
            pledged_amt: (this.props.project.pledged_amt + (parseInt(this.state.pledgeAmt, 10)))
        }

        this.props.createBacking(backing)
            .then(() => this.props.updateProject(projectUpdates))

        let element = document.getElementById("project")
        element.scrollIntoView({ behavior: 'smooth' });
        
        this.setState({
          pledgeAmt: `Pledge $${this.props.reward.pledge_amt} or more`
        });
    }
<br><br>

Fresh Faces 
        
        const freshFaces = projects.slice(projects.length - 5, projects.length - 1)

        <div className="fresh-faces-container">
            <div className="fresh-header-wrapper">
            <div className="fresh-faces-header-container">
                <h4 className="fresh-faces-header"> Fresh Faces</h4>
                <h4 className='fresh-faces-subheader'>Experience the newest campaigns Quickstarter has to offer.</h4>
            </div>
            </div>
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

                            <Link to={`projects/${project.id}`}>
                                <span className="sidebar-amt">{Math.floor((project.pledged_amt / project.goal_funding) * 100)}% Funded</span>
                            </Link>

                        </div>
                    </li>
                ))}
            </ul>
        </div>

**Technologies/Languages**

* Ruby on Rails
* React/Redux
* Javascript
* JQuery/JBuilder
* HTML/CSS
* AWS
* Webpack
* Heroku 

