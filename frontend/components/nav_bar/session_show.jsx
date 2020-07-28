import React from 'react';
import {Link} from 'react-router-dom';

const SessionShow = ({currentUser, openDropdown}) => {

    const links = () => {
        return (
            <nav>
                <Link to="/login" className="login-button">Log in</Link>
            </nav>
        )
    };

    const welcome = () => {
        return (
            <div className="dropdown">
                <a className="login-button" onClick={() => openDropdown('userDropdown')}>
                    <span>
                        {currentUser.username}
                    </span>
                </a>
            </div>
        )
    }

    return currentUser ? welcome() : links();
}

export default SessionShow;