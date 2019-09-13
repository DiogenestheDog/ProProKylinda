import { connect } from 'react-redux';

import Splash from './splash';
import { logout } from '../../actions/session_actions'

// const mapStateToProps = ({ session }) => ({
//     loggedIn: Boolean(session.id)
// });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Splash);