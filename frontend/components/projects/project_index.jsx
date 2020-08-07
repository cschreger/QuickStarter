import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "All Categories",
            location: "Earth",
            sort: "Magic",
            categoryClicked: false,
            locationClicked: false,
            sortClicked: false
        }
    }

    componentWillMount() {
        this.props.fetchProjects();
    }

    handleClick(e) {
        e.preventDefault();

        if (e.target.className === "explore-category-list-container") {
            this.setState({
                categoryClicked: !this.state.categoryClicked
            })
        } else if (e.target.className === "explore-location-list-container") {
            this.setState({
                locationClicked: !this.state.locationClicked
            })
        }
        else if (e.target.className === "explore-sort-list-container") {
            this.setState({
                sortClicked: !this.state.sortClicked
            })
        }
    }

    render () {

        const projects = this.props.projects

        return (

        <div className='full-index-page'>
            <div className="search-categories-container">
                <div className="explore-search-bar">
                    Show me 
                    <div className="category-change">
                        <div className="explore-category-list-container">
                            {this.state.category}
                            <i id="search-arrow" className="fas fa-caret-down"></i>
                        </div>
                    </div>
                    projects on
                    <div className="location-change">
                        <div className="explore-location-list-container">
                            {this.state.location}
                            <i id="search-arrow" className="fas fa-caret-down"></i>
                        </div>
                    </div>
                    sorted by 
                    <div className="explore-sort">
                        <div className="explore-sort-list-container">
                            <i id="search-arrow" className="fas fa-caret-down"></i>
                            {this.state.sort}
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-index-wrapper">
            <div className="projects-index-container">
                <div className="projects-amt">Explore {projects.length - 1} projects</div>
                <ul className="projects-index">  {/*flexwrap */}
                    {projects.map((project, i) => (
                        <li key={i}>
                            <div>{project.title}</div>
                            <div>{project.creator_id}</div>
                        </li>
                    ))}

                </ul>
            </div>
            </div>
        </div>

        )
    }

}


export default ProjectIndex;