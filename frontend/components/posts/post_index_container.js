import { connect } from 'react-redux';

import { getAllPosts } from '../../actions/post_actions';
import { getAllUsers } from '../../actions/user_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
    const posts = Object.values(state.entities.posts).reverse();
    return ({
    posts,
    users: state.entities.users
    })
};

// const mapDispatchToProps = dispatch => ({
//     getAllPosts: () => dispatch(getAllPosts()),
//     getAllUsers: () => dispatch(getAllUsers())
// });

export default connect(mapStateToProps)(PostIndex);