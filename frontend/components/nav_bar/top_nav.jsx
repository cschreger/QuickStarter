import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../session/greeting_container'

const TopNav = () => {

    return (
    <div>
        {/* <Modal /> */}
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
                        <h5 id="blm"><a href="https://blacklivesmatter.com/defundthepolice/">#BlackLivesMatter</a></h5>
                </div>
            </nav>


            <nav className="top-nav-bar-right">
                <div className="search">Search
                    <i className="fas fa-search"></i>
                </div>
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
}

export default TopNav;