import React from 'react';
import {Route, Link} from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import GreetingContainer from '../components/session/greeting_container';
import Modal from './modal/modal';
import greeting_container from '../components/session/greeting_container';
import Greeting from './session/greeting';
import ProjectFormContainer from '../components/projects/project_form_container';
import ProjectShowContainer from '../components/projects/project_show_container';

// const App = () => (
class App extends React.Component {

    render() {

        const navBar = (
        <div>
            <Modal />
        <div className='top-nav-bar'>
            <nav className="top-nav-bar-left">
                <div className="nav-bar-link">
                    <Link id="explore" to={'/explore'}>Explore</Link>
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
                {/* <div className="search"> */}
                    <GreetingContainer />
                {/* </div> */}

                {/* <div className="log-in">
                    <Modal />
                    {/* <Link to={'/login'}>Log in</Link> */}
                    {/* <a className="nav-bar-link" href="/login">Log in</a> */}
                {/* </div>  */}
            </nav>
        </div>
            </div>
        )


        const footer = (
            <div className="footer-container">
                <div className="footer-categories">
                    <ul className="languages">Languages/Frameworks
                        <li id="top-lister">Ruby/Ruby on Rails</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>React/Redux</li>
                        <li>SQL</li>
                    </ul>

                    <ul className="resources">Resources
                        <li id="top-lister"><a href="https://github.com/cschreger">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/cade-schreger-01048aab/">LinkedIn</a></li>
                    </ul>
                </div>
                
            </div>
        )

        return (
        <div>
            {navBar}
            {/* <Route path="/" component={GreetingContainer} /> */}
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route path="/projects/:projectId" component={ProjectShowContainer} />
            <ProtectedRoute path="/start" component={ProjectFormContainer} />
            {footer}
        </div>
        )
    }
};

export default App;