import { connect } from 'react-redux';

import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { getAllUsers } from '../../actions/user_actions';
import { getAllPosts, createPost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users: users }, ui }) => ({
    modal: ui.modal,
    user: users[session.id],
    id: session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    changeUser: user => dispatch(changeUser(user)),
    createPost: post => dispatch(createPost(post)),
    getAllPosts: () => dispatch(getAllPosts()),
    getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);