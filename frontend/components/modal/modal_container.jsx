import Modal from './modal';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import {log_out} from '../../actions/session_actions';

const msp = state => ({
    modal: state.ui.modal
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    logOut: () => dispatch(log_out())
});

export default connect(msp,mdp)(Modal);