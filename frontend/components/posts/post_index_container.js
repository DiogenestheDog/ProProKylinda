import { connect } from 'react-redux';

import { getAllPosts } from '../../actions/post_actions';
import { getAllUsers } from '../../actions/user_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
    posts: Object.values(state.entities.posts),
    users: state.entities.users
});

// const mapDispatchToProps = dispatch => ({
//     getAllPosts: () => dispatch(getAllPosts()),
//     getAllUsers: () => dispatch(getAllUsers())
// });

export default connect(mapStateToProps)(PostIndex);