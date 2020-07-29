import {connect} from 'react-redux';
import NavBarDropdown from "./nav_bar_dropdown";
import {log_out} from './'

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(log_out())
});

export default connect(msp, mdp)(NavBarDropdown);