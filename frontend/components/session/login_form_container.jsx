import React from 'react';
import { connect } from 'react-redux';
import { log_in } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import {resetErrors} from '../../actions/session_actions'

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: "Log in",
    navLink: <Link to="/signup">Sign up</Link>
})

const mdp = dispatch => ({
    logIn: formUser => dispatch(log_in(formUser)),
    resetErrors: () => dispatch(resetErrors())
});

export default connect(msp, mdp)(LoginForm)