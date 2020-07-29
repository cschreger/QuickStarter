import {connect} from 'react-redux';
import Greeting from './greeting';
import {log_out} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(log_out())
})

export default connect(msp, mdp)(Greeting);