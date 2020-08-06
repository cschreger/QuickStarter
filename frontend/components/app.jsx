import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ProjectIndexContainer from '../components/projects/project_index_container';
import ProjectFormContainer from '../components/projects/project_form_container';
import ProjectShowContainer from '../components/projects/project_show_container';
import ProjectMainPageContainer from '../components/projects/project_main_page_container';
import RewardCreateContainer from '../components/rewards/reward_create_container';
import TopNav from '../components/nav_bar/top_nav';
import UserProjectsContainer from './projects/user_projects_container';

class App extends React.Component {

    render() {

        return (
            <div>
            <TopNav />
            <Switch>
            <Route exact path="/" component={ProjectMainPageContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route exact path="/explore" component={ProjectIndexContainer} />
            <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
            <ProtectedRoute path="/start" component={ProjectFormContainer} />
            <Route exact path="/projects/:projectId/rewards" component={RewardCreateContainer}/>
            <ProtectedRoute exact path="/projects" component={UserProjectsContainer}/>
            </Switch>
        </div>
        )
    }
};

export default App;