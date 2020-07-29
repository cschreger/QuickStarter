import React from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
    if (this.props.currentUser) {
        return (
            <div className="dropdown-message">
                <input className="dropdown-input" 
                type="submit" 
                value={this.props.currentUser.name}
                onClick={() => this.props.openModal('navBarDropdown')}
                />
            </div>
        )
    } else {
        return (
            <div className="greeting">
                <Link to="/login">Log in</Link>
            </div>
        )
    }

}
}

export default Greeting;