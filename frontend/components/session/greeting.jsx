import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
    }

    handleDropdown(e) {
        e.preventDefault();

        if (e.target.className === "far fa-user-circle") {
            this.setState({
                clicked: !this.state.clicked
            })
        }
    }

render() {

    if (this.props.currentUser) {
        return (
            <div>
            <i className="far fa-user-circle" onClick={this.handleDropdown}/>
            <div className={`dropdown-window ${this.state.clicked === true ? "clicked" : ""}`}>
                <div className='dropdown-container'>
                    <div>Hi, {this.props.currentUser.name}!</div>
                    <Link to='/start'>Start a Project</Link>
                    <Link to='/projects'>View my Projects</Link>
                    
                    <button 
                    onClick={this.handleDropdown} 
                    onClick={this.handleSubmit}>Log Out!</button>
                </div>
            </div>
            </div>
        )
    } else {
        return (
            <div className="log-in">
                <Link to="/login">Log in</Link>
            </div>
        )
    }

}
}

export default Greeting;