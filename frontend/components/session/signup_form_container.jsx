import React from 'react';
import {connect} from 'react-redux';
import {sign_up} from '../../actions/session_actions';
import SignupForm from './signup_form';
import {Link} from 'react-router-dom';

const msp = ({errors}) => ({
    errors: errors.session,
    formType: "Create Account",
    navLink: <Link to="/login">Log in</Link>
})

const mdp = dispatch => ({
    signUp: formUser => dispatch(sign_up(formUser))
});

export default connect(msp, mdp)(SignupForm)