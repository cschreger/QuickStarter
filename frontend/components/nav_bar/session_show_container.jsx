import {connect} from 'react-redux';
import SessionShow from "./session_show";

const msp = state => ({
    currentUser: state.session.currentUser
});

export default connect(msp, null)(SessionShow);