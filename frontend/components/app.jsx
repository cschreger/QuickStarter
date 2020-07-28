import React from 'react';
import {Route, Link} from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import {AuthRoute} from '../util/route_util';

// const App = () => (
class App extends React.Component {

    render() {

        const navBar = (
            <nav className="top-nav-bar">
                <div className="nav-bar-link">
                    <Link to={'/explore'}>Explore</Link>
                </div>

                <div className="nav-bar-link">
                    <Link to={'/start'}>Start a project</Link>
                </div>

                <div className="main-logo">
                    <Link to={'/'}>QuickStarter</Link>
                </div>

                <div className="search">
                    {/* What goes here? */}
                </div>

                <div className="log-in">
                    <Link to={'/login'}>Log in</Link>
                    {/* <a className="nav-bar-link" href="/login">Log in</a> */}
                </div>
                    
            </nav>
        )
        return (
        <div>
            <h1>QuickStarter</h1>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
        </div>
        )
    }
};

export default App;