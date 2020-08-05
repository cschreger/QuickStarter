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

        return (
            <div className="search-categories-container">
                <div className="explore-search-bar">
                    Show me 
                    <div className="category-change">
                        <div className="explore-category-list-container">
                            {this.state.category}
                        </div>
                    </div>
                    projects on
                    <div className="location-change">
                        <div className="explore-location-list-container">
                            {this.state.location}
                        </div>
                    </div>
                    sorted by 
                    <div className="explore-sort">
                        <div className="explore-sort-list-container">
                            {this.state.sort}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default ProjectIndex;