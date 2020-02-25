import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { getAllUsers } from '../../actions/user_actions';
import { getAllPosts, getAllUserPosts } from '../../actions/post_actions';

const mapStateToProps = ({ session, entities: { users: users } }) => ({
    user: users[session.id],
    id: session.id
});     

const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(getAllPosts()),
    getAllUsers: () => dispatch(getAllUsers()),
    getAllUserPosts: userId => dispatch(getAllUserPosts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);