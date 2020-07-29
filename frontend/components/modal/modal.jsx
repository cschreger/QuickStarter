import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { log_out } from '../../actions/session_actions';
import NavBarDropdown from '../nav_bar/nav_bar_dropdown';

const Modal = (modal, closeModal) => {
    if (!modal) {
        return null
    }

    let component;
    switch (modal) {
        case 'navBarDropdown':
            component = <NavBarDropdown closeModal={closeModal} />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
            </div>
        </div>
    );
}

const msp = state => ({
    modal: state.ui.modal
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    logOut: () => dispatch(log_out())
});

export default connect(msp, mdp)(Modal);
