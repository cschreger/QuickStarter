import {connect} from 'react-redux';
import Greeting from './greeting';
import {log_out} from '../../actions/session_actions';

const msp = state => ({
    projects: Object.values(state.entities.projects),
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(log_out())
})

export default connect(msp, mdp)(Greeting);