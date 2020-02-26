import { connect } from 'react-redux';

import PostIndex from './post_index';

    const mapStateToProps = ({ entities }) => {
    let posts = Object.values(entities.posts).reverse();
    let users = entities.users
    return ({
    posts,
    users
    });
};

// const mapDispatchToProps = dispatch => ({
//     getAllPosts: () => dispatch(getAllPosts()),
//     getAllUsers: () => dispatch(getAllUsers())
// });

export default connect(mapStateToProps)(PostIndex);