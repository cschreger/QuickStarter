import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout().then(this.props.closeModal)
        // this.props.history.push('/');
    }

render() {
    if (this.props.currentUser) {
        return (
            <>
            <div className="dropdown-message">
                <input className="dropdown-input" 
                type="submit" 
                value={this.props.currentUser.name}
                onClick={() => this.props.openModal('navBarDropdown')}
                />
            </div>
            <button onClick={this.handleSubmit}>Log Out!</button>
            </>
        )
    } else {
        return (
            <div className="dropdown-links">
                <Link to="/login">Log in</Link>
            </div>
        )
    }

}
}

export default Greeting;