import { connect } from 'react-redux';

import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { getAllUsers } from '../../actions/user_actions';
import { getAllPosts } from '../../actions/post_actions';

const mapStateToProps = ({ session, entities: { users: users } }) => ({
    user: users[session.id],
    loggedIn: Boolean(session.id),
    id: session.id
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    changeUser: user => dispatch(changeUser(user)),
    getAllPosts: () => dispatch(getAllPosts()),
    getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);