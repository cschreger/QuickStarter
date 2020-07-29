import React from 'react';
import {Route, Link} from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import {AuthRoute} from '../util/route_util';

// const App = () => (
class App extends React.Component {

    render() {

        const navBar = (
        <div className='top-nav-bar'>
            <nav className="top-nav-bar-left">
                <div className="nav-bar-link">
                    <Link to={'/explore'}>Explore</Link>
                </div>

                <div className="nav-bar-link">
                    <Link to={'/start'}>Start a project</Link>
                </div>
            </nav>

            <nav className="top-nav-bar-center">
                <div className="main-logo">
                    <Link to={'/'}>QuickStarter</Link>
                </div>
            </nav>

            <nav className="top-nav-bar-right">
                <div className="search">
                    {/* What goes here? */}
                </div>

                <div className="log-in">
                    <Link to={'/login'}>Log in</Link>
                    {/* <a className="nav-bar-link" href="/login">Log in</a> */}
                </div> 
            </nav>

        </div>
        )
        return (
        <div>
            {navBar}
            {/* <Route path="/" component={Home} /> */}
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
        </div>
        )
    }
};

export default App;